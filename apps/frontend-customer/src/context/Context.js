import React, { useState } from "react";
import { denemeFunc } from "../function/function";

export const Context = React.createContext();
function ContextProvider(props) {
    const [deneme, setDeneme] = useState();
    // const [dataConfig, setDataConfig] = React.useState()
    // const [dataCountries, setDataCountries] = React.useState()
    // const [dataCities, setDataCities] = React.useState()
    // const [dataSpecialities, setDataSpecialities] = React.useState()
    // const [dataQuestionsSurvey, setDataQuestionsSurvey] = React.useState()
    // const [dataQuestionsQuiz, setDataQuestionsQuiz] = React.useState()
    // const [dataUsersCheck, setDataUsersCheck] = React.useState()
    // const [dataUsersRegistered, setDataUsersRegistered] = React.useState()
    // const [dataLanguages, setDataLanguages] = React.useState()
    const values = {
        deneme
        // dataConfig,
        // dataCountries,
        // dataCities,
        // dataSpecialities,
        // dataQuestionsSurvey,
        // dataQuestionsQuiz,
        // dataUsersCheck,
        // dataUsersRegistered,
        // dataLanguages,
    }
    React.useEffect(() => {
        denemeFunc(setDeneme);
        // getConfig(setDataConfig)
        // getCountries(setDataCountries)
        // getSpecialities(setDataSpecialities)
        // getQuestionsSurvey(setDataQuestionsSurvey)
        // getQuestionsQuiz(setDataQuestionsQuiz)
        // getUsersCheck(setDataUsersCheck)
        // getUsersRegistered(setDataUsersRegistered)
        // getLanguages(setDataLanguages)
        // getCities(setDataCities)
    }, [])

    return (
        <Context.Provider value={values}>
            {props.children}
        </Context.Provider>
    );
}
export default ContextProvider;