export default {
    // The URL of the survey
    surveyURL: "https://rbixm.qualtrics.com/jfe/form/SV_cAc1Ib5B7V4nVLE?CountryCode=MEX&Q_Language=ES&SC=Simple",

    // A small delay for clicking butttons and inputting things, just in case it doesnt load or there's an error
    safetyDelay: 500,

    // Query selectors for the survey
    restaurantNumberSelector: ".QR-QID128-1",
    dateOfVisitSelector: ".QR-QID128-2",
    timeOfVisitHourSelector: "select[name=\"QR~QID130#1~1\"]",
    timeOfVisitMinuteSelector: "select[name=\"QR~QID130#2~1\"]",
    timeOfVisitAmPmSelector: "select[name=\"QR~QID130#3~1\"]",
    nextButtonSelector: ".NextButton",

    q1Selector: "#QID13",

    q2Selector: "#QID15",
    q2VerySatisfiedSelector: "#QID15-4-label",

    q3Selector: "#QID45",
    q3InputSelector: "textarea[name=\"QR~QID45~TEXT\"]",

    q4Selector: "#QID18",
    q4AnswerSelector: "#QID18-5-label",

    q5Selector: "#QID19",
    q5AnswerSelector: "#QID19-5-label",
    
    q6Selector: "#QID20",
    q6AnswerSelector: "#QID20-5-label",

    q7Selector: "#QID23",
    q7Answer1Selector: "label[for=\"QR~QID23~4~1\"]",
    q7Answer2Selector: "label[for=\"QR~QID23~6~1\"]",
    q7Answer3Selector: "label[for=\"QR~QID23~7~1\"]",
    q7Answer4Selector: "label[for=\"QR~QID23~8~1\"]",
    q7Answer5Selector: "label[for=\"QR~QID23~9~1\"]",
    q7Answer6Selector: "label[for=\"QR~QID23~10~1\"]",
    q7Answer7Selector: "label[for=\"QR~QID23~11~1\"]",
    q7Answer8Selector: "label[for=\"QR~QID23~12~1\"]",
    q7Answer9Selector: "label[for=\"QR~QID23~13~1\"]",

    q10Selector: "#QID27",

    q11Selector: "#QID44",
    q11Answer1Selector: "label[for=\"QR~QID44~1~1\"",
    q11Answer2Selector: "label[for=\"QR~QID44~3~1\"",

    q12Selector: "#QID37",
    q12AnswerSelector: "#QID37-2-label",

    q13Selector: "#QID48",
    q13AnswerSelector: "#QID48-1-label",

    q14Selector: "#QID53",
    q14AnswerSelector: "#QID53-49-label",

    q15Selector: "#QID57",
    q15AnswerSelector: "#QID57-1-label",

    q16Selector: "#QID58",
    q16Answer1Selector: "label[for=\"QR~QID58~1~1\"]",
    q16Answer2Selector: "label[for=\"QR~QID58~2~1\"]",
    q16Answer3Selector: "label[for=\"QR~QID58~3~1\"]",

    q17Selector: "#QID59",
    q17Answer1Selector: "label[for=\"QR~QID59~1~1\"]",
    q17Answer2Selector: "label[for=\"QR~QID59~2~1\"]",
    q17Answer3Selector: "label[for=\"QR~QID59~3~1\"]",
    q17Answer4Selector: "label[for=\"QR~QID59~6~1\"]",
    q17Answer5Selector: "label[for=\"QR~QID59~7~1\"]",

    q18Selector: "#QID74",
    q18AnswerSelector: "#QID74-4-label",

    q19Selector: "#QID75",
    q19AnswerSelector: "textarea[name=\"QR~QID75~TEXT\"]",

    q20Selector: "#QID76",
    q20AnswerSelector: "textarea[name=\"QR~QID76~TEXT\"]",

    q21Selector: "#QID60",
    q21AnswerSelector: "#QID61-1-label",

    q22Selector: "#QID63",

    q23Selector: "#QID64",
    q23AnswerSelector: "label[for=\"QR~QID64~3\"]",

    q24Selector: "#QID65",
    q24AnswerSelector: "label[for=\"QR~QID65~1\"]",

    q25Selector: "#QID68",
    q25AnswerSelector: "#QID68-2-label",

    endSelector: "#EndOfSurvey",

    // Answers
    answers: [
        "Excelente sabor y presentación.",
        "Bastante satisfactoria en términos de calidad.",
        "Muy deliciosa, pero la presentación podría mejorar.",
        "Aceptable, pero esperaba un mejor sabor.",
        "Sorprendentemente deliciosa y bien presentada.",
        "Buena relación calidad-precio en general.",
        "Fresca y sabrosa.",
        "Cumplió mis expectativas en términos de calidad.",
        "Increíblemente deliciosa, pero algo grasosa.",
        "Balance perfecto entre sabor y presentación.",
        "Ligeramente insípida y decepcionante.",
        "Textura y sabor mejorables, pero decente.",
        "Sabores auténticos y muy satisfactorios.",
        "Demasiado condimentada para mi gusto.",
        "Frescura y sabor se podrían mejorar.",
        "Sabor casero y reconfortante, pero algo simple.",
        "Ingredientes de alta calidad y muy frescos.",
        "Un tanto sobrecocida, pero buen sabor en general.",
        "Calidad gourmet que justifica el precio."
    ]
}