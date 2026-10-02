import React, { useRef, useEffect } from 'react';
import { useTextEditor } from '../context/TextEditorContext';

interface EditableTextProps {
  id: string;
  defaultText: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export const EditableText: React.FC<EditableTextProps> = ({
  id,
  defaultText,
  className = '',
  as: Component = 'span',
}) => {
  const { isEditMode, getText, updateText, setEditMode } = useTextEditor();
  const currentText = getText(id, defaultText);
  const elementRef = useRef<HTMLElement>(null);

  // Sync DOM with state when not actively focused
  useEffect(() => {
    if (elementRef.current && document.activeElement !== elementRef.current) {
      elementRef.current.innerText = currentText;
    }
  }, [currentText]);

  const handleBlur = () => {
    if (elementRef.current) {
      const newText = elementRef.current.innerText.trim();
      if (newText && newText !== currentText) {
        updateText(id, newText);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // If user presses Escape in edit mode, blur to save
    if (e.key === 'Escape') {
      elementRef.current?.blur();
    }
  };

  const handleDoubleClick = () => {
    if (!isEditMode) {
      setEditMode(true);
      setTimeout(() => {
        elementRef.current?.focus();
      }, 50);
    }
  };

  const editingStyles = isEditMode
    ? 'outline-dashed outline-1 outline-[#ff3b00]/70 hover:outline-[#ff3b00] bg-[#ff3b00]/5 transition-all cursor-text rounded-xs px-1 -mx-1'
    : 'cursor-default';

  return React.createElement(
    Component,
    {
      ref: elementRef,
      contentEditable: isEditMode,
      suppressContentEditableWarning: true,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      onDoubleClick: handleDoubleClick,
      title: isEditMode ? 'Click to edit this text' : 'Double click to edit text',
      className: `${className} ${editingStyles}`,
    },
    currentText
  );
};
