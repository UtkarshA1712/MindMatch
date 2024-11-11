import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export default function LoadingAnimation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8 inline-block"
        >
          <Brain className="w-16 h-16 text-blue-600" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <motion.h2 
            className="text-2xl font-bold text-gray-800"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Analyzing your profile...
          </motion.h2>
          <p className="text-gray-600">Please wait while we process your responses</p>
        </motion.div>
      </div>
    </div>
  );
}