import { useEffect } from 'react'

const Translate = () => {

    useEffect(() => {
        // create script element
        let addScript = document.createElement('script')
        // set source to the script
        addScript.setAttribute('src','//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
        //append script to document
        document.body.appendChild(addScript)
        // assign local funtion reference to window object
        window.googleTranslateElementInit = googleTranslateElementInit;

    }, [])

    const googleTranslateElementInit = () => {
        // initialize google translator element
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'fr,en',
            autoDisplay: false,
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element')
        preventDefault()
    }

  return (
    <div className="flex justify-center items-center h-0" id="google_translate_element" style={{border: "none"}}>


        {/* Boton select */}
        <div className="flex" style={{display: 'none'}}>
            <div id=":1.targetLanguage">
            <select className="goog-te-combo">
            </select>
            </div>
        </div>

        {/* Boton Idiomas */}

        <div className="skiptranslate goog-te-gadget" dir='ltr' style={{height: '50px', display: 'flex', overflow: 'hidden'}}>
            <div id=':0.targetLanguage' className='goog-te-gadget-simple w-[500px] bg-blue' style={{height: '50px', overflow: 'hidden', border: 'none'}}>
                <span className='flex overflow-hidden h-[51px] items-center bg-blue' style={{}}>
                    <a aria-haspopup="true" className="VIpgJd-ZVi9od-xl07Ob-lTBxed flex justify-between w-full text-[16px] px-8 py-3" href="#">
                        <span className='text-white'>Language</span>
                        <span aria-hidden="true" style={{color: '#fff'}}>▼</span>
                    </a>
                </span>
                <img src="https://www.google.com/images/cleardot.gif" className="goog-te-gadget-icon hidden" alt="" style={{ backgrounImage: "url(&quot;https://translate.googleapis.com/translate_static/img/te_ctrl3.gif&quot;); background-position: -65px 0px;"}}></img>
            </div>
        </div>

    </div>
  )
}

export default Translate