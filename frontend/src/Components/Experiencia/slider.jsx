import imgParis from '../../assets/Experiencia-img/paris-img.avif'
import imgCroacia from '../../assets/Experiencia-img/croacia-img.avif'
import imgJapao from '../../assets/Experiencia-img/japao-img.avif'
import imgMilao from '../../assets/Experiencia-img/milao-img.avif'
import imgOrlando from '../../assets/Experiencia-img/orlando-img.avif'
import imgParaty from '../../assets/Experiencia-img/paraty-img.avif'
import imgIlhaBela from '../../assets/Experiencia-img/ilhabela-img.avif'
import imgUshuaia from '../../assets/Experiencia-img/ushuaia-img.avif'

import './slider.css'

export function Slider(){

    return(
        <>
          <div className='slider-exp'>
                <div className='slides-exp'>
                    {/* Radio Buttons */}
                    <input type="radio" name="radio-btn-exp" id="radio1-exp" title='Slide 1'/>
                    <input type="radio" name="radio-btn-exp" id="radio2-exp" title='Slide 2'/>
                    <input type="radio" name="radio-btn-exp" id="radio3-exp" title='Slide 3'/>
                    <input type="radio" name="radio-btn-exp" id="radio4-exp" title='Slide 4'/>
                    <input type="radio" name="radio-btn-exp" id="radio5-exp" title='Slide 5'/>
                    <input type="radio" name="radio-btn-exp" id="radio6-exp" title='Slide 6'/>
                    <input type="radio" name="radio-btn-exp" id="radio7-exp" title='Slide 7'/>
                    <input type="radio" name="radio-btn-exp" id="radio8-exp" title='Slide 8'/>

                    {/* Slide images */}
                    <div className='slide-first-exp'>
                        <img src={imgParis} alt="Paris" />
                    </div>
                    <div className='slide-exp'>
                        <img src={imgCroacia} alt="Croacia" />
                    </div>
                    <div className='slide-exp'>
                        <img src={imgJapao} alt="Japao" />
                    </div>
                    <div className='slide-exp'>
                        <img src={imgMilao} alt="Milao" />
                    </div>
                    <div className='slide-exp'>
                        <img src={imgOrlando} alt="Orlando" />
                    </div>
                    <div className='slide-exp'>
                        <img src={imgParaty} alt="Paraty" />
                    </div>
                    <div className='slide-exp'>
                        <img src={imgIlhaBela} alt="IlhaBela" />
                    </div>
                    <div className='slide-exp'>
                        <img src={imgUshuaia} alt="Ushuaia" />
                    </div>
                        
                    {/* Navigation auto */}
                    <div className='navigation-auto-exp'>
                        <div className='auto-btn1-exp'></div>
                        <div className='auto-btn2-exp'></div>
                        <div className='auto-btn3-exp'></div>
                        <div className='auto-btn4-exp'></div>
                        <div className='auto-btn5-exp'></div>
                        <div className='auto-btn6-exp'></div>
                        <div className='auto-btn7-exp'></div>
                        <div className='auto-btn8-exp'></div>
                    </div>

                </div>

                <div className='manual-navigation-exp'>
                    <label for="radio1-exp" className='manual-btn-exp'></label>
                    <label for="radio2-exp" className='manual-btn-exp'></label>
                    <label for="radio3-exp" className='manual-btn-exp'></label>
                    <label for="radio4-exp" className='manual-btn-exp'></label>
                    <label for="radio5-exp" className='manual-btn-exp'></label>
                    <label for="radio6-exp" className='manual-btn-exp'></label>
                    <label for="radio7-exp" className='manual-btn-exp'></label>
                    <label for="radio8-exp" className='manual-btn-exp'></label>
                </div>
            </div>
        </>
           
    )
}