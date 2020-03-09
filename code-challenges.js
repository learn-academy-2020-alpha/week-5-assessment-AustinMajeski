
// ASSESSMENT 5: JavaScript Coding Practical Questions

/**********************/
/*   Austin Majeski   */
/**********************/




    // -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*-


    //               Custom Logging To Console


    // -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*-


class CustomLog{

    static _init_SET_UP = CustomLog._init_SET_UP_Function()

    static _init_SET_UP_Function() {

        // ============= ============= ============= ============= ============= ============= =============

        //  #  Giving the ' call_custom_log ' method to the Array type

        Array.prototype.get_custom_log_format = function() {
            let stopping_index = this.length - 1
            let output = "[ "
            this.forEach( (v,i)  =>  i < stopping_index ? output += `${v}, ` : output += v )
            return( output + " ]" )
        }

        //  #  Giving the ' emphasize ' method to Strings

        String.prototype.emphasize = function(  spacing = 0, color = CustomLog.Use.GREEN_TEXT  ) {
            let local_space = (  spacing > 0 ? " ".repeat(spacing) : ""  )
            return( `${CustomLog.Use.BLACK_BACKGROUND}${color}${local_space}${this}${local_space}${CustomLog.Use.FORMAT_RESET}` )
        }

        // ============= ============= ============= ============= ============= ============= =============

        return 'Done'
    }


    // - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - :
    // = : == : === : == : = : == : === : == : = : == : === : == : = : == : === : == : = : == : === : == : = :
    // - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - :


    static Values = {

        // # Used for spacing
        LENGTH:	        70,	//55
        INDENT_SIZE:    3,

        // # Characters
        ESC:	String.fromCharCode(27)

    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    static Colors = {
        white: 15,
        black: 0,
        green: 10,
        pink: 201,
        deep_blue: 217
    }

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    static Use = {

        // # Single Definitions

        init_push_down:     console.log( "\n\n" ),
        SPACE:              " ".repeat( CustomLog.Values.INDENT_SIZE*2 + 1 ),
        INDENT:	            " ".repeat( CustomLog.Values.INDENT_SIZE ),

        // # Enhanced Definitions

        SOLID_LINE:	        "_".repeat( CustomLog.Values.LENGTH ),
        BLANK_LINE:	        " ".repeat( CustomLog.Values.LENGTH ),

        // # Background Colors

        WHITE_BACKGROUND:	CustomLog.Values.ESC+"[48;5;15m",
        BLACK_BACKGROUND:	CustomLog.Values.ESC+"[48;5;0m",
        BLUE_BACKGROUND:	CustomLog.Values.ESC+"[48;5;"+CustomLog.Colors.deep_blue+"m",

        // # Foreground Colors

        WHITE_TEXT:	        CustomLog.Values.ESC+"[38;5;15m",
        GREEN_TEXT:	        CustomLog.Values.ESC+"[38;5;"+CustomLog.Colors.green+"m",
        PINK_TEXT:	        CustomLog.Values.ESC+"[38;5;"+CustomLog.Colors.pink+"m",

        // # Reset

        FORMAT_RESET:	    CustomLog.Values.ESC+"[0m"	// => [ ! ]   Reset
    }



    // - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - :
    // = : == : === : == : = : == : === : == : = : == : === : == : = : == : === : == : = : == : === : == : = :
    // - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - : -- : --- : -- : - :



    //  #  Log Function  #  //
    static log() {
        console.log(
			`\n\n${CustomLog.top_banner}\
			\n\n${CustomLog.Use.SPACE}${arguments[0]}\
			\n${CustomLog.Use.INDENT}${CustomLog.Use.SOLID_LINE}\n\n`
		)
        let Args = Array.from(arguments).splice(1)
        Args.forEach( w => { console.log(  CustomLog.Use.SPACE + (
		    typeof w.get_custom_log_format === 'undefined' ?
                w : w.get_custom_log_format()
            ))
        })
        console.log(  
            `\n${CustomLog.Use.INDENT}${CustomLog.Use.SOLID_LINE}\
            \n${CustomLog.Use.INDENT}${CustomLog.Use.SOLID_LINE}\n\n\n`  )
    }


    //  #  Simplifying  #  //
    static get top_banner(){ return(
        `${CustomLog.Use.INDENT}${CustomLog.Use.WHITE_BACKGROUND}${CustomLog.Use.BLANK_LINE}${CustomLog.Use.FORMAT_RESET}`
    )}
}



// ============= ============= ============= ============= ============= ============= ============= ============= =============
// ============= ============= ============= ============= ============= ============= ============= ============= =============







    // -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*-


    //                   Assessment Start


    // -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*- -*-





// ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== -
//  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --

// --------------------1)   Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --
// ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== -


var secretCodeWord1 = "lackadaisical"   // Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"    // Expected output: "g0bbl3dyg00k"


//  #  Giving the ' code_my_message ' method to the String type
String.prototype.code_my_message = function() {
    
    let convert = {
        'a' : '4',
        'e' : '3',
        'i' : '1',
        'o' : '0'
    }

    return (  Array.from( this ).map( letter => typeof convert[letter] !== 'undefined' ? convert[letter] : letter ).join('')  )
}



// ============= ============= 

CustomLog.log(  "Coded Message",
    
    `${secretCodeWord1}   =>   ${ secretCodeWord1.code_my_message().emphasize() }`,
    `${secretCodeWord2}    =>   ${ secretCodeWord2.code_my_message().emphasize() }`
)

// ============= ============= 






// ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== -
//  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --

// --------------------2)   Create a function that takes in an array and returns all the words that have the letter 'a' in them.

//  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --
// ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== -


var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]   // Expected output: "Apple" "Banana" "Peach"


//  #  Giving the ' get_items_with_letter ' method to the Array type
Array.prototype.get_items_with_letter = function() {
    
    if( typeof arguments[0] !== 'string' ) { return this }
    let letter_to_find = arguments[0].toLowerCase()

    return this.filter(  item  =>  typeof item === 'string'  &&  item.toLowerCase().includes( letter_to_find )  )
}



// ============= ============= 

CustomLog.log(  "All Words with the Letter 'A'",
    
    `Array Used   =>   ${arrayOfWords.get_custom_log_format()}`,
    '',
    `   =>   ${ arrayOfWords.get_items_with_letter( 'a' ).get_custom_log_format().emphasize() }`
)

// ============= ============= 






// ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== -
//  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --

// --------------------3)   Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

//  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --  --
// ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== - ==== -


var hand1 = [5, 5, 5, 3, 3] // Expected output: true
var hand2 = [5, 5, 3, 3, 4] // Expected output: false

var hand3 = [ 8, 8, 8, 8, 8 ] // Expected output: false
var hand4 = [ 1, 1, 0, 1, 1 ] // Expected output: false



Array.prototype.is_fullhouse = function() {
    
    if( this.length !== 5 ) { return false }

    let found = (
         this.reduce( (acc, curr) => {
             if ( typeof acc[curr] === 'undefined' ) {
                 acc[curr] = 1;
             } else {
                 acc[curr] += 1;
             }

             return acc;
         }, {} )
    )

    return Object.keys(found).length === 2 ? 
        (( Object.entries(found)[1][1] === 2 || Object.entries(found)[1][1] === 3 ) ? true : false)
        : false
   
}



// ============= ============= 

CustomLog.log(  "Full House?",

    `${hand1.get_custom_log_format()}   =>   ${ hand1.is_fullhouse().toString().emphasize(2) }${" ".emphasize()}`,
    `${hand2.get_custom_log_format()}   =>   ${ hand2.is_fullhouse().toString().emphasize(2) }`,
    '','',
    'Another Example',
    '---------------',
    `${hand3.get_custom_log_format()}   =>   ${ hand2.is_fullhouse().toString().emphasize(2) }`,
    `${hand4.get_custom_log_format()}   =>   ${ hand2.is_fullhouse().toString().emphasize(2) }`
)

// ============= ============= 












// ============= ============= ============= ============= ============= ============= =============
        console.log( "\n" )
// EOF