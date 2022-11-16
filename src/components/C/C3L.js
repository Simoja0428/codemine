import "./C3LStyles.css";
import React from 'react';

const C3L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: modulus";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: FALSE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: ==";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="c3lcon">
        <div className= "c3sectionHeader"> What are Operators? </div>
        <div className="c3text">
            Operators are a way of manipulating and comparing variables in C++ programming
            for reuse at a later time. There are 4 main kinds of operators in C++ programming:
            arthimetic, logical, relational, and bitwise. We will focus on the relational and arthimetic operators here.
        </div>
        <div className= "c3sectionHeader"> Arthimetic Operators: </div>
        <div className="c3text">
        Arthimetic operators are simply operations that we can perform on number
        based data types (Integers, Doubles, Floats, etc.)
        The chances are you have previously worked with all of these 
        major operations. The 5 major arthimetic operators used in 
        Computer Science are comprised of addition, subtraction, multiplication, division and modulus.
        </div>
        <div className= "c3sectionHeader"> Addition: </div>
        <div className="c3text">
        The addition operator is used when we want to add the values of two or more 
        numbers together. When adding numbers together, we will want to make sure that 
        we have this summed value stored in a seperate variable for later usage. 
        Further, it is important to be concious of the types of all variables used in the operation. Remember, 
        integers do not account for decimal values and forgetting this could lead to bugs in your future programs. 
        Below are some examples of using the addition operator in C++.
        </div>
        <div className="c3code">
            <p>
                int sum = 1 + 2; <br />
                double dSum = 1.5 + 3.2 + 1.0; <br />
                int wSum = 1.5 + 3; <br />
            </p>
        </div>
        <div className="c3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="c3out">
            <p>
                Value of sum: 3 <br />
                Value of dSum: 5.7 <br />
                Value of wSum: 4 <br />
            </p>
        </div>
        <div className= "c3sectionHeader"> Subtraction: </div>
        <div className="c3text">
        The subtracion operator is used when we want to subract one or more numbers from a value. 
        When subracting numbers, we will want to make sure that we have this new value stored in a seperate variable for later usage. 
        Further, it is important to be concious of the types of all variables used in the operation. Remember, integers do not account 
        for decimal values and forgetting this could lead to bugs in your future programs. 
        Below are some examples of using the subtraction operator in C++.
        </div>
        <div className="c3code">
            <p>
                int val = 5 - 2; <br />
                double dVal = 3.2 - 4.0; <br />
                int wVal = 4.5 - 3; <br />
            </p>
        </div>
        <div className="c3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="c3out">
            <p>
                Value of val: 3 <br />
                Value of dVal: -0.8 <br />
                Value of wVal: 1 <br />
            </p>
        </div>
        <div className= "c3sectionHeader"> Multiplication: </div>
        <div className="c3text">
            The multiplication operator is used when we want to multiply two or more values 
            together. When multiplying numbers, we will want to make sure that we have this 
            new value stored in a seperate variable for later usage. Further, it is important
            to be concious of the types of all variables used in the operation. Remember, 
            integers do not account for decimal values and forgetting this could lead to 
            bugs in your future programs.Below are some examples of using the multiplication operator in C++.
        </div>
        <div className="c3code">
            <p>
                int mul = 4 * 3; <br />
                double dMul = 1.5 * 2.0; <br />
                int wMul = 4.5 * 3; <br />
            </p>
        </div>
        <div className="c3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="c3out">
            <p>
                Value of mul: 12 <br />
                Value of dMul: 6.0 <br />
                Value of wMul: 12 <br />
            </p>
        </div>
        <div className= "c3sectionHeader"> Division: </div>
        <div className="c3text">
        The division operator is used when we want to divide one or more numbers from a value. 
        When dividing numbers, we will want to make sure that we have this new value stored in a seperate 
        variable for later usage. Further, it is important to be concious of the types of all 
        variables used in the operation. Remember, integers do not account for decimal values and forgetting 
        this could lead to bugs in your future programs. Below are some examples of using the division operator in C++.
        </div>
        <div className="c3code">
            <p>
                int div = 4 / 2; <br />
                double dDiv = 4.5 / 3; <br />
                int wDiv = 4.5 / 3; <br />
            </p>
        </div>
        <div className="c3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="c3out">
            <p>
            Value of div: 2 <br />
            Value of dDiv: 1.5 <br />
            Value of wDiv: 1 <br />
            </p>
        </div>
        <div className= "c3sectionHeader"> Modulus: </div>
        <div className="c3text">
        The modulus operator is used when we want to find the remainder given by 
        dividing two numbers. When using modulus, we will want to make sure that 
        we have this new value stored in a seperate variable for later usage. 
        The modulus operator is more complex than the other arithmetic operators 
        and is not avaliable in lower-level assembly programming languages. 
        Below are some examples of using the modulus operator in C++.
        </div>
        <div className="c3code">
            <p>
                int mod = 4 % 2; <br />
                int mod2 = 7 % 3; <br />
                int mod3 = 4 % 0; <br />
            </p>
        </div>
        <div className="c3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="c3out">
            <p>
                Value of mod: 0 <br />
                Value of mod2: 1 <br />
                Value of mod3: 4 <br />
            </p>
        </div>
        <div className="c3sectionHeader"> Relational Operators: </div>
        <div className="c3text">
        Relational operators are simply operations that we can use on number based data 
        types (Integers, Doubles, Floats, etc.) to compare them. The chances are you 
        have previously worked with all of these major operators. They include: 
        Greater Than, Less Than, Greater Than or Equal To, Less Than or Equal To, Equal To, and Not Equal To.
        </div>
        <div className="c3sectionHeader"> Greater Than, Greater Than or Equal To, Less Than, Less Than or Equal To: </div>
        <div className="c3text">
        The operators: Greater Than, Less Than, Greater Than or Equal To and Less Than 
        or Equal To are fairly simple to use. They are used in the same way you would use 
        them mathematically in order to compare a series of numerical values. 
        Below are some examples of using theses operators in C++, remember they are used for comparison.
        </div>
        <div className="c3code">
            <p>
            if ( 5  &#8827; 2 ) <br />
            &emsp;&emsp;cout &lt;&lt; "5 is greater than 2." &lt;&lt; endl; <br />
            if ( 4 &#8826;= 1 ) <br />
            &emsp;&emsp;cout &lt;&lt; "This should not run." &lt;&lt; endl; <br />
            if ( 4 &#8826; 10 ) <br />
            &emsp;&emsp;cout &lt;&lt; "4 is less than 10." &lt;&lt; endl; <br />
            </p>
        </div>
        <div className="c3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="c3out">
            <p>
                5 is greater than 2. <br />
                4 is less than 10. <br />
            </p>
        </div>
        <div className="c3sectionHeader"> Equal To or Not Equal To: </div>
        <div className="c3text">
        The operators used for Equal To and Not Equal To are a bit different 
        from the other relational operators; mainly, the Equal To and Not Equal 
        To operators can also be used on other data types including strings and 
        pointers. The Equal To and Not Equal To operators are incredibly common 
        and used for comparison. Below are some examples of using theses operators in C++.
        </div>
        <div className="c3code">
            <p>
                if ( 10.0 == 10 ) <br />
                &emsp;&emsp;cout &lt;&lt; "10.0 is equal to 10." &lt;&lt; endl; <br />
                if ( 'a' != 'a' ) <br />
                &emsp;&emsp;cout &lt;&lt; "This should not run." &lt;&lt; endl; <br />
                if ( "jacob" != "john" ) <br />
                &emsp;&emsp;cout &lt;&lt; "The name jacob is not equal to john." &lt;&lt; endl; <br />
            </p>
        </div>
        <div className="c3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="c3out">
            <p>
                10.0 is equal to 10. <br />
                The name jacob is not equal to john. <br />
            </p>
        </div>
        <div className= "c3sectionHeader"> Review Questions: </div>
        <div className="c3blocker">
            <p className= "c3question"> What operator can we use if we want to check the divisibility of two numbers?</p>
                <p className= "c3answer" id = "a1">  </p>
                <div className="c3btnf"> <button className="c3btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c3blocker">
            <p className= "c3question"> TRUE/FALSE: Dividing two integers will always produce the exact answer.</p>
                <p className= "c3answer" id = "a2">  </p>
                <div className="c3btnf"> <button className="c3btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c3blocker">
            <p className= "c3question"> What is the syntax for checking if two numbers are the same in C++ programming?</p>
                <p className= "c3answer" id = "a3">  </p>
                <div className="c3btnf"> <button className="c3btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default C3L;