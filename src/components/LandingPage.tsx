import React from 'react';
import { cn } from "../lib/utils"
import { motion } from 'framer-motion'
import { Brain, ArrowRight, Globe, Globe2, DollarSign, BarChart3, TestTubes, Clock, Lock, Lightbulb } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-[#3182ce]" />
            <span className="font-semibold text-xl">MindMatch </span>
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">English</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Learn to better understand and know yourself with a <span className="text-pink-500">free</span> personality test.
          </h1>
          <br></br><br></br>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            The following test contains 50 questions which is estimated to take you about 5 minutes to complete.
          </p>
          <motion.button
            onClick={onStart}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#3182ce] rounded-full hover:bg-[#2b6cb0] transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Take the free test
            <motion.div
              className="ml-2"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <Lock className="h-8 w-8 text-pink-500" />
                <h3 className="font-semibold">Open</h3>
                <p className="text-sm text-muted-foreground">
                  This test is based on the study of Big-Five traits.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <DollarSign className="h-8 w-8 text-pink-500" />
                <h3 className="font-semibold">Free</h3>
                <p className="text-sm text-muted-foreground">
                  The test is completely free.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <TestTubes className="h-8 w-8 text-pink-500" />
                <h3 className="font-semibold">Scientific</h3>
                <p className="text-sm text-muted-foreground">
                  BigFive is a scientifically validated and reliable psychological model.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <Lightbulb className="h-8 w-8 text-pink-500" />
                <h3 className="font-semibold">Insightful</h3>
                <p className="text-sm text-muted-foreground">
                  Discover valuable insights about your personality
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            What is the Big Five?
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-4">
              The Big Five personality traits, also known as the five-factor model (FFM), is a taxonomy for personality traits. It is based on common language descriptors. When factor analysis (a statistical technique) is applied to personality survey data, some words used to describe aspects of personality are often applied to the same person.
            </p>
            <p>
              The five factors have been defined as openness to experience, conscientiousness, extraversion, agreeableness, and neuroticism, often represented by the acronyms OCEAN or CANOE.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#f8f9fa] border-t py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          
        </div>
      </footer>
    </div>
  );
}

