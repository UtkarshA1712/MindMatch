import React from 'react';
import { cn } from "../lib/utils"
import { motion } from 'framer-motion'
import { Brain, ArrowRight, Globe, Globe2, BarChart3,TestTubes,  Clock, Lock } from 'lucide-react';

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
      "rounded-xl border bg-card text-card-foreground shadow",
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
          Learn to better understand and know yourself with a <span className="text-pink-500">free</span>  personality test.
          </h1>
          <br></br><br></br>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            {/* idhr ye likhna h ki test me kitne questions hai aur approx kitna time lgega  */}
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
          {/* <button
            onClick={onStart}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#3182ce] rounded-full hover:bg-[#2b6cb0] transition-colors duration-200"
          >
            Take the free test
            <ArrowRight className="ml-2 w-5 h-5" />
          </button> */}
        </div>
      </div>

      {/* Features Section */}
      {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon={Clock}
            title="5 min"
            description="The test only takes 5 minutes"
          />
          <Feature
            icon={Lock}
            title="Free"
            description="The test is completely free"
          />
          <Feature
            icon={BarChart3}
            title="Scientific"
            description="The test is scientifically validated"
          />
          <Feature
            icon={Globe2}
            title="Open source"
            description="The test is based on big 5 traits"
          />
        </div>
      </div> */}
      <div className="grid md:grid-cols-4 gap-6 mt-15">
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
                <Lock className="h-8 w-8 text-pink-500" />
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
                <Globe2 className="h-8 w-8 text-pink-500" />
                <h3 className="font-semibold">Translated</h3>
                <p className="text-sm text-muted-foreground">
                  Translated to over 20 languages. Help out on this translation page!
                </p>
              </div>
            </CardContent>
          </Card>
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
          <p>© 2024 BigFive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-12 h-12 rounded-full bg-[#4a47a3] bg-opacity-10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#4a47a3]" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
 }
 