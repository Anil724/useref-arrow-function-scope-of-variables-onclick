import React, { useRef } from 'react'

function MarksSheet() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let teluguInputRef = useRef();
    let hindiInputRef = useRef();
    let englishInputRef = useRef();
    let mathsInputRef = useRef();
    let scienceInputRef = useRef();
    let socialInputRef = useRef();
    let resultParaRef = useRef();


  return (
    <div>
        <form className="markssheet">
            <div>
                <label>First Name</label>
                <input type="text" ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" ref={lastNameInputRef}></input>
            </div>
            <div>
                <label>Telugu</label>
                <input type="number" ref={teluguInputRef}></input>
            </div>
            <div>
                <label>Hindi</label>
                <input type="number" ref={hindiInputRef}></input>
            </div>
            <div>
                <label>English</label>
                <input type="number" ref={englishInputRef}></input>
            </div>
            <div>
                <label for ='as'>Maths</label>
                <input id='as' type="number" ref={mathsInputRef}></input>
            </div>
            <div>
                <label>Science</label>
                <input type="number" ref={scienceInputRef}></input>
            </div>
            <div>
                <label>Social</label>
                <input type="number" ref={socialInputRef}></input>
            </div>
            <div>
                <button type="button" 
                onClick={()=>{
                    let firstName = firstNameInputRef.current.value;
                    let lastName = lastNameInputRef.current.value;
                    let teluguMarks = Number(teluguInputRef.current.value);
                    let hindiMarks = Number(hindiInputRef.current.value);
                    let englishMarks = Number(englishInputRef.current.value);
                    let mathsMarks = Number(mathsInputRef.current.value);
                    let scienceMarks = Number(scienceInputRef.current.value);
                    let socialMarks = Number(socialInputRef.current.value);
                    let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;
                    
                    
                    alert(`Total Marks are ${totalMarks}`);
                    resultParaRef.current.innerHTML = `${firstName} ${lastName} got total marks are ${totalMarks}`;
                    console.log(totalMarks);



                }}>Calculate Result</button>
            </div>
            <p ref={resultParaRef}>Please Enter Values and Click Calculate</p>
        </form>
    </div>
  )
}

export default MarksSheet