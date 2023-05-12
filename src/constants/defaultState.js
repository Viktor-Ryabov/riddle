export const defaultState = {
    noticeActive: {
        wronAnswerNoticeActive: false,
        rightAnswerNotiseActive: false,
        questionNotiseActive: false,
        numberOfCurrentQuestion: 1,
    },
    navbarButtons: {
        navbarButton_Main: true,
        navbarButton_About: false,
        navbarButton_Contacts: false,
        navbarButton_Registration: false,
        navbarButton_QuestionPage: false,
        navbarButton_rules: false,
    },
    answers: {
        numberOfCurrentQuestion: 1,
        modal: false,
        countAnswers: 0,
        answer: "...",
    },
    userState: {
        userName: "",
    },
};
