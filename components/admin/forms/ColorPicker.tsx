import React from 'react'
import {  HexColorInput, HexColorPicker } from "react-colorful";
import { toast } from 'sonner';
interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
 
}
const ColorPicker = ({ value, onChange }:ColorPickerProps) => {
  const handleCopy = () => {
    if (value) {
      navigator.clipboard.writeText(value);
     toast.success("Color copied to clipboard");
    }
  };
    return (
      <div className="overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
          <div className=" space-y-3 order-2 md:order-1">
          <div className="w-full md:w-3/5 order-1 md:order-2">
            <HexColorPicker
              color={value}
              onChange={onChange}
              className="w-full"
            />
          </div>
            <div className="flex items-center gap-3">
              
              <div
                className="h-12 w-12 rounded-md border border-gray-200 shadow-inner flex-shrink-0 transition-colors duration-200"
                style={{ backgroundColor: value || '#ffffff' }}
              />
              
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-600 mb-1">Hex Code</label>
                <HexColorInput
                  color={value}
                  onChange={onChange}
                  prefixed
                  className="w-24 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-mono"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-md p-2 text-center">
              <span className="text-xs text-gray-500">Selected Color:</span>
              <span 
                className="ml-2 font-mono text-sm font-medium cursor-pointer hover:text-blue-600" 
                onClick={handleCopy}
                title="Click to copy"
              >
                {value || 'None'}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {['#1e40af', '#b91c1c', '#15803d', '#7e22ce', '#f59e0b', '#0f172a', '#64748b'].map((color) => (
                <button
                  key={color}
                  onClick={() => onChange && onChange(color)}
                  className={`h-6 w-6 rounded-full border ${value === color ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-gray-200'}`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          </div>
          
        
        </div>
      </div>
    </div>
  )
}
export default ColorPicker