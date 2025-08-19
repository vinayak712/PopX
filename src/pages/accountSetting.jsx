// import React from "react";
import { Camera } from "lucide-react";

export default function AccountSettings() {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="w-[400px] max-w-lg border border-gray-200 rounded-md bg-white shadow-sm overflow-hidden h-[600px]">

        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
          <h2 className="text-2xl font-semibold text-purple-700">Account Settings</h2>
        </div>

        
        <div className="px-6 py-6 flex gap-4 items-start  border-dashed border-gray-500 border-b">
    
          <div className="relative">
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="h-16 w-16 rounded-full object-cover border border-gray-300"
            />
            <button className="absolute bottom-0 right-0 h-6 w-6 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-md">
              <Camera size={14} />
            </button>
          </div>

      
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Marry Doe</h3>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>

        {/* <div className="h-72 bg-gray-50 border-t border-dashed border-gray-200" /> */}
      </div>
    </div>
  );
}
