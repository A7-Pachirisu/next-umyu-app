'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import QuestionCard from './_components/QuestionCard';
import backgroundImage from '@/assets/background.png';
import { QuestionsState, Difficulty, AnswerObject } from '@/app/(providers)/(root)/game/quiz/quizTypes';

const TOTAL_QUESTIONS = 10;

const QuizGamePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const response = await fetch(`/api/quiz?amount=${TOTAL_QUESTIONS}&difficulty=${Difficulty.EASY}`);
    if (!response.ok) {
      setLoading(false);
      throw new Error('Failed to fetch questions');
    }
    const newQuestions = await response.json();
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <div className="flex max-h-screen flex-col items-center justify-center">
      <div className="relative h-[800px] w-[600px]">
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="pointer-events-none"
        />
      </div>
      <div className="z-1 absolute flex w-full flex-col items-center">
        <h1 className="mb-8 bg-gradient-to-b from-white to-blue-300 bg-clip-text text-center text-5xl font-bold text-transparent drop-shadow-lg">
          REACT QUIZ
        </h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button
            className="mb-4 rounded-xl border-2 border-orange-600 bg-gradient-to-b from-white to-orange-300 px-8 py-2 shadow-md"
            onClick={startTrivia}
          >
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="mb-4 text-2xl text-white">Score: {score}</p> : null}
        {loading ? <p className="text-2xl text-white">Loading Questions...</p> : null}
        {!loading && !gameOver && questions.length > 0 && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button
            className="mt-4 rounded-xl border-2 border-orange-600 bg-gradient-to-b from-white to-orange-300 px-8 py-2 shadow-md"
            onClick={nextQuestion}
          >
            Next Question
          </button>
        ) : null}
        <Link href="/game" className="mt-8 text-red-500">
          GoLobby
        </Link>
      </div>
    </div>
  );
};

export default QuizGamePage;
