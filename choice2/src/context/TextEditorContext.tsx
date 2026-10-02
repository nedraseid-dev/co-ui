import React, { createContext, useContext, useState, useEffect } from 'react';

interface TextEditorContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  setEditMode: (active: boolean) => void;
  texts: Record<string, string>;
  getText: (id: string, defaultVal: string) => string;
  updateText: (id: string, newVal: string) => void;
  resetAllTexts: () => void;
  hasCustomEdits: boolean;
}

const STORAGE_KEY = 'axiom_custom_page_texts';

const TextEditorContext = createContext<TextEditorContextType | null>(null);

export const TextEditorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [texts, setTexts] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(texts));
    } catch {
      // ignore storage quota errors
    }
  }, [texts]);

  const getText = (id: string, defaultVal: string): string => {
    return texts[id] ?? defaultVal;
  };

  const updateText = (id: string, newVal: string) => {
    setTexts((prev) => ({
      ...prev,
      [id]: newVal,
    }));
  };

  const resetAllTexts = () => {
    setTexts({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const toggleEditMode = () => setIsEditMode((prev) => !prev);
  const hasCustomEdits = Object.keys(texts).length > 0;

  return (
    <TextEditorContext.Provider
      value={{
        isEditMode,
        toggleEditMode,
        setEditMode: setIsEditMode,
        texts,
        getText,
        updateText,
        resetAllTexts,
        hasCustomEdits,
      }}
    >
      {children}
    </TextEditorContext.Provider>
  );
};

export const useTextEditor = () => {
  const ctx = useContext(TextEditorContext);
  if (!ctx) {
    throw new Error('useTextEditor must be used within a TextEditorProvider');
  }
  return ctx;
};
