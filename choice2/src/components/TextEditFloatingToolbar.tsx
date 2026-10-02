import React from 'react';
import { Edit3, Check, RotateCcw } from 'lucide-react';
import { useTextEditor } from '../context/TextEditorContext';

export const TextEditFloatingToolbar: React.FC = () => {
  const { isEditMode, toggleEditMode, resetAllTexts, hasCustomEdits } = useTextEditor();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 font-mono text-xs select-none">
      {isEditMode ? (
        <div className="flex items-center gap-2 bg-[#0e0e0e]/95 border border-[#ff3b00]/60 p-1.5 pl-3 rounded-md shadow-2xl backdrop-blur-md animate-fade-in text-white">
          <div className="flex items-center gap-2 pr-2 border-r border-neutral-800">
            <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-ping" />
            <span className="font-semibold text-neutral-200">Text Edit Active</span>
          </div>

          <span className="text-[11px] text-neutral-400 hidden sm:inline">
            Click any text to type
          </span>

          {hasCustomEdits && (
            <button
              onClick={resetAllTexts}
              className="flex items-center gap-1 px-2.5 py-1 text-[11px] bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded transition-colors cursor-pointer border border-neutral-800"
              title="Reset all texts to original"
            >
              <RotateCcw className="w-3 h-3 text-neutral-400" />
              <span>Reset</span>
            </button>
          )}

          <button
            onClick={toggleEditMode}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#ff3b00] hover:bg-[#e03400] text-black font-semibold rounded transition-colors cursor-pointer shadow-md"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Done</span>
          </button>
        </div>
      ) : (
        <button
          onClick={toggleEditMode}
          className="group flex items-center gap-2 bg-[#0e0e0e]/90 hover:bg-[#141414] border border-neutral-800 hover:border-[#ff3b00]/50 text-neutral-300 hover:text-white px-3 py-2 rounded-md shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer"
          title="Click to edit any text on the page"
        >
          <Edit3 className="w-3.5 h-3.5 text-[#ff3b00] group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-sans font-medium">Edit Texts</span>
          {hasCustomEdits && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" title="Custom edits active" />
          )}
        </button>
      )}
    </div>
  );
};
