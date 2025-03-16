import { useCallback, useEffect, useRef, useState } from "react";

interface UseImageUploadProps {
  onUpload?: (url: string) => void;
  onChange?: (url: string) => void;
  value?: string;
}

export function useImageUpload({ onUpload, onChange, value }: UseImageUploadProps = {}) {
  const previewRef = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(value || null);
  const [fileName, setFileName] = useState<string | null>(null);

  // Initialize with the provided value if available
  useEffect(() => {
    if (value && !previewUrl) {
      setPreviewUrl(value);
    }
  }, [value, previewUrl]);

  const handleThumbnailClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        setFileName(selectedFile.name);
        
        // Create a blob URL for preview only
        const url = URL.createObjectURL(selectedFile);
        setPreviewUrl(url);
        previewRef.current = url;
        
        // Convert file to base64 for storage
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64String = e.target?.result as string;
          // This is the string you can store in the database
          if (onUpload) onUpload(base64String);
          if (onChange) onChange(base64String);
        };
        reader.readAsDataURL(selectedFile);
      }
    },
    [onUpload, onChange],
  );

  const handleRemove = useCallback(() => {
    if (previewUrl && previewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setFileName(null);
    previewRef.current = null;
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    // Notify that image was removed
    if (onUpload) onUpload('');
    if (onChange) onChange('');
  }, [previewUrl, onUpload, onChange]);

  // Clean up blob URLs when component unmounts
  useEffect(() => {
    return () => {
      if (previewRef.current && previewRef.current.startsWith('blob:')) {
        URL.revokeObjectURL(previewRef.current);
      }
    };
  }, []);

  return {
    previewUrl,
    fileName,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
  };
}