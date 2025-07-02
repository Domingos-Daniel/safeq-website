"use client"

import React from "react"
import { X } from "lucide-react"
import { Button } from "./button"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  type?: "success" | "error" | "info"
}

export function Modal({ isOpen, onClose, title, children, type = "info" }: ModalProps) {
  if (!isOpen) return null

  const getIconAndColor = () => {
    switch (type) {
      case "success":
        return {
          icon: "✅",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          iconBg: "bg-green-100",
          iconColor: "text-green-600"
        }
      case "error":
        return {
          icon: "❌",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          iconBg: "bg-red-100",
          iconColor: "text-red-600"
        }
      default:
        return {
          icon: "ℹ️",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600"
        }
    }
  }

  const { icon, bgColor, borderColor, iconBg, iconColor } = getIconAndColor()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl border max-w-md w-full mx-4 transform transition-all duration-300 ease-out">
        {/* Header */}
        <div className={`${bgColor} ${borderColor} border-b px-6 py-4 rounded-t-2xl`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center`}>
                <span className="text-xl">{icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {children}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-2xl border-t">
          <Button
            onClick={onClose}
            className="w-full bg-blue-900 hover:bg-blue-800"
          >
            Fechar
          </Button>
        </div>
      </div>
    </div>
  )
}
