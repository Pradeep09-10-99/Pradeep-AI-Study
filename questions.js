// questions.js file
const quizData = [
    {
        id: 1,
        exam: "NTPC CBT-1",
        question: "Bharat ke pehle Rashtrapati kaun the?",
        options: [
            "A) Mahatma Gandhi",
            "B) Dr. Rajendra Prasad",
            "C) Jawaharlal Nehru",
            "D) Dr. B.R. Ambedkar"
        ],
        correctAnswer: 1, // 0=A, 1=B, 2=C, 3=D (Array index ke hisaab se)
        explanation: "Dr. Rajendra Prasad Bharat ke pehle Rashtrapati the, jinhone 1950 se 1962 tak karyabhar sambhala."
    },
    {
        id: 2,
        exam: "SSC CGL",
        question: "HTML ka full form kya hai?",
        options: [
            "A) Hyper Text Markup Language",
            "B) High Text Machine Language",
            "C) Hyperlink and Text Markup Language",
            "D) None of the above"
        ],
        correctAnswer: 0,
        explanation: "HTML ka full form Hyper Text Markup Language hota hai, jo web pages banane ke kaam aati hai."
    }
    // Aap aise hazaron questions yahan comma laga kar add kar sakte hain...
];
