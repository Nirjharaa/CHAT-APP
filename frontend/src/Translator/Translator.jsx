// import { useState } from "react";
// import './Translator.css';
// import { AiOutlineClose } from 'react-icons/ai';

// const Translator = () => {
//   const [inputText, setInputText] = useState('');
//   const [outputLang, setOutputLang] = useState('ar');
//   const [outputText, setOutputText] = useState('');
//   const [isTranslated, setIsTranslated] = useState();

//   const translate = () => {
//     console.log(outputLang);
//     const options = {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
//         'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
//       },
//       body: `[{"Text":"${inputText}"}]`
//     };

//     fetch(`${process.env.REACT_APP_Base_URL}${outputLang}${process.env.REACT_APP_Query_Params}`, options)
//       .then(response => {
//         if (response.status !== 200) {
//           setIsTranslated(false);
//           console.log("there's an error");
//           return;
//         }
//         setIsTranslated(true);
//         response.json()
//           .then(response => {
//             const translatedText = response[0].translations[0].text;
//             setOutputText(translatedText);
//             console.log(translatedText);
//           })
//       })
//       .catch(err => {
//         setIsTranslated(false);
//         console.error(err)
//       });
//   }

//   const clearInput = () => {
//     setInputText('');
//     setOutputText('');
//     setIsTranslated();
//   }

//   return (
//     <section className="translator">
//       <div className="row-wrapper">
//         <div className="translator-container input-lang">
//           <div className="top-row">
//             <button
//               className="btn btn-primary btn-translate"
//               onClick={translate}
//             >
//               Translate
//             </button>
//           </div>
//           <form className="input-form">
//             <textarea
//               className="text-box"
//               placeholder="Enter text (any language)"
//               onChange={e => setInputText(e.target.value)}
//               value={inputText}
//             >
//             </textarea>
//             {
//               inputText !== "" &&
//               <AiOutlineClose
//                 className="icon-btn close-btn"
//                 onClick={clearInput}
//               />
//             }
//           </form>
//         </div>
//         <div className="translator-container output-lang">
//           <div className="top-row">
//             <select
//               name="languages"
//               id="languages"
//               className="form-select form-select-sm"
//               onChange={e => setOutputLang(e.target.value)}
//             >
//               <option value="ar">Arabic</option>
//               <option value="en">English</option>
//               <option value="fr">French</option>
//               <option value="de">German</option>
//               <option value="es">Spanish</option>
//             </select>
//           </div>
//           <p className="text-box output-box">
//             {
//               isTranslated === false ?
//                 <span className="output-placeholder translation-error">Translation failed</span>
//                 :
//                 outputText === "" ?
//                   <span className="output-placeholder">Select a language</span>
//                   :
//                   outputText
//             }
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Translator;


import React, { useState } from 'react';
import './Translator.css';
import { AiOutlineClose } from 'react-icons/ai';

const Translate = () => {
  const [inputText, setInputText] = useState('');
  const [outputLang, setOutputLang] = useState('hi');
  const [outputText, setOutputText] = useState('');
  const [isTranslated, setIsTranslated] = useState();

  const translate = () => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '959fdfb6f0msh9a580cfc844e702p1d534djsne89eac9b0af3',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      body: JSON.stringify([{ "Text": inputText }])
    };

    fetch(`https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${outputLang}&api-version=3.0&profanityAction=NoAction&textType=plain`, options)
      .then(response => {
        if (response.status !== 200) {
          setIsTranslated(false);
          console.log("there's an error");
          return;
        }
        setIsTranslated(true);
        response.json()
          .then(response => {
            const translatedText = response[0].translations[0].text;
            setOutputText(translatedText);
            console.log(translatedText);
          })
      })
      .catch(err => {
        setIsTranslated(false);
        console.error(err)
      });
  }

  const clearInput = () => {
    setInputText('');
    setOutputText('');
    setIsTranslated();
  }

  return (
    <section className="translator">
      <div className="row-wrapper">
        <div className="translator-container input-lang">
          <div className="top-row">
            <button
              className="btn btn-translate rounded-full border-3 bg-blue-100 hover:bg-blue-300"
              style={{ borderColor: '#BBD0FF', color: '#13293d' }}
              onClick={translate}
            >
              Translate
            </button>
          </div>
          <form className="input-form">
            <textarea
              className="text-box border-3 bg-gray-300"
              style={{ borderColor: '#BBD0FF', color: '#13293d' }}
              placeholder="Enter text (any language)"
              onChange={e => setInputText(e.target.value)}
              value={inputText}
            >
            </textarea>
            {
              inputText !== "" &&
              <AiOutlineClose
                className="icon-btn close-btn"
                onClick={clearInput}
              />
            }
          </form>
        </div>
        <div className="translator-container output-lang">
          <div className="top-row">
            <select
              name="languages"
              id="languages"
              className="form-select form-select-sm mb-1 pt-1 pb-1 rounded-full border-3 bg-blue-50 "
              style={{ borderColor: '#BBD0FF', color: '#13293d' }}
              onChange={e => setOutputLang(e.target.value)}
            >
                  <option value="as">Assamese</option>
                  <option value="ar">Arabic</option>
                  <option value="bn">Bengali</option>
                  <option value="bh">Bhojpuri</option>
                  <option value="zh-CN">Chinese (Simplified)</option>
                  <option value="zh-TW">Chinese (Traditional)</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="gu">Gujarati</option>
                  <option value="hi">Hindi</option>
                  <option value="it">Italian</option>
                  <option value="ja">Japanese</option>
                  <option value="kn">Kannada</option>
                  <option value="ko">Korean</option>
                  <option value="ml">Malayalam</option>
                  <option value="mr">Maithili</option>
                  <option value="mr">Marathi</option>
                  <option value="or">Odia</option>
                  <option value="pa">Punjabi</option>
                  <option value="pt">Portuguese</option>
                  <option value="ru">Russian</option>
                  <option value="sd">Sindhi</option>
                  <option value="es">Spanish</option>
                  <option value="ta">Tamil</option>
                  <option value="te">Telugu</option>
                  <option value="ur">Urdu</option>

            </select>
          </div>
          <p className="text-box output-box">
            {
              isTranslated === false ?
                <span className="output-placeholder translation-error">Translation failed</span>
                :
                outputText === "" ?
                  <span className="output-placeholder">Select a language</span>
                  :
                  outputText
            }
          </p>
        </div>
      </div>
    </section>
  );
}

export default Translate;
