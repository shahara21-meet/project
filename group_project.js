///var setup
var other,female,male,sports,baking,gaming,traveling,art_and_crafts,music,reading_or_writing,preteen,young_adult,adult,elder_adult,elderly


//////////////////gender
function question1(){
//switch buttons(clear)
	document.getElementById("female").style.display="none";
	document.getElementById("male").style.display="none";
	document.getElementById("other").style.display="none";
//switch buttons(new buttons)
	document.getElementById("sports").style.display="inline-block";
	document.getElementById("baking").style.display="inline-block";
	document.getElementById("gaming").style.display="inline-block";
	document.getElementById("traveling").style.display="inline-block";
	document.getElementById("art&crafts").style.display="inline-block";
	document.getElementById("music").style.display="inline-block";
	document.getElementById("reading/writing").style.display="inline-block";

}


function gender_f(){
	female=true
	question1()
	}


function gender_m(){
	male=true
	question1()
	}



function gender_o(){
	other=true
	question1()
	}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////hobbies
function question2(){
	//switch buttons(clear)
	document.getElementById("sports").style.display="none";
	document.getElementById("baking").style.display="none";
	document.getElementById("gaming").style.display="none";
	document.getElementById("traveling").style.display="none";
	document.getElementById("art&crafts").style.display="none";
	document.getElementById("music").style.display="none";
	document.getElementById("reading/writing").style.display="none";

//switch buttons(new buttons)
	document.getElementById("preteen").style.display="inline-block";
	document.getElementById("young_adult").style.display="inline-block";
	document.getElementById("adult").style.display="inline-block";
	document.getElementById("elder_adult").style.display="inline-block";
	document.getElementById("elderly").style.display="inline-block";

}


function hobbies_s(){
	sports=true
	question2()
}

function hobbbies_b(){
	baking=true
	question2()
}

function hobbies_g(){
	gaming=true
	question2()
}

function hobbies_t(){
	traveling=true
	question2()
}

function hobbies_a(){
	art_and_crafts=true
	question2()
}

function hobbies_m(){
	music=true
	question2()
}

function hobbies_r(){
	reading_or_writing=true
	question2()
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function question3(){
    document.getElementById("preteen").style.display="none";
    document.getElementById("young_adult").style.display="none";
    document.getElementById("adult").style.display="none";
    document.getElementById("elder_adult").style.display="none";
    document.getElementById("elderly").style.display="none";
    end_result()
}


function age_p(){
    preteen=true
    question3()
    end_result()
    }


function age_y(){
    young_adult=true
    question3()
    end_result()
}

function age_a(){
    adult=true
    question3()
    end_result()
}


function age_e_a(){
    elder_adult=true
    question3()
    end_result()
}


function age_e(){
    elderly=true
    question3()
    end_result()
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function end_result(){
    ///o_sports
    if (other==true&&sports==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';    
    }
    else if  (other==true&&sports==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';
    }
    else if  (other==true&&sports==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&sports==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&sports==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///o_baking
    else if  (other==true&&baking==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';
    }

    else if  (other==true&&baking==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&baking==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&baking==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&baking==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///o_gaming
    else if  (other==true&&gaming==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&gaming==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&gaming==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&gaming==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&gaming==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///o_traveling
    else if  (other==true&&traveling==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&traveling==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&traveling==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&traveling==true&&elder_adult==true){
        var src = document.getElementById("x")
    }
    else if  (other==true&&traveling==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///o_arts&crafts
    else if  (other==true&&art_and_crafts==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&art_and_crafts==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&art_and_crafts==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&art_and_crafts==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&art_and_crafts==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///o_music
    else if  (other==true&&music==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&music==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&music==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&music==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&music==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///o_reading/writing
    else if  (other==true&&reading_or_writing==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&reading_or_writing==true&&young_adult==true){
    document.getElementById("x")
    }
    else if  (other==true&&reading_or_writing==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
/////////////////////////////female
     ///f_sports
    if (female==true&&sports==true&&preteen==true){
    document.getElementById('fsp').style.visibility = 'visible';

    }
    else if  (female==true&&sports==true&&young_adult==true){
    document.getElementById('fsya').style.visibility = 'visible';

    }
    else if  (female==true&&sports==true&&adult==true){
    document.getElementById('fsa').style.visibility = 'visible';

    }
    else if  (female==true&&sports==true&&elder_adult==true){
    document.getElementById('fsea').style.visibility = 'visible';

    }
    else if  (female==true&&sports==true&&elderly==true){
    document.getElementById('fse').style.visibility = 'visible';

    }

    ///f_baking
    else if  (female==true&&baking==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&baking==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&baking==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&baking==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&baking==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///f_gaming
    else if  (female==true&&gaming==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&gaming==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&gaming==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&gaming==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (other==true&&gaming==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///f_traveling
    else if  (female==true&&traveling==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    else if  (female==true&&traveling==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&traveling==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&traveling==true&&elder_adult==true){
        var src = document.getElementById("x")
    }
    else if  (female==true&&traveling==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///f_arts&crafts
    else if  (female==true&&art_and_crafts==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&art_and_crafts==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&art_and_crafts==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&art_and_crafts==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&art_and_crafts==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///f_music
    else if  (female==true&&music==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&music==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&music==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&music==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&music==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///o_reading/writing
    else if  (female==true&&reading_or_writing==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&reading_or_writing==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&reading_or_writing==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&reading_or_writing==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&reading_or_writing==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    else if  (female==true&&reading_or_writing==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (female==true&&reading_or_writing==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

/////////////////////////////male
     ///m_sports
    if (male==true&&sports==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

        
    }
    else if  (male==true&&sports==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&sports==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&sports==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&sports==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///m_baking
    else if  (male==true&&baking==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&baking==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&baking==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&baking==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&baking==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///m_gaming
    else if  (male==true&&gaming==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&gaming==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&gaming==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&gaming==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&gaming==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///m_traveling
    else if  (male==true&&traveling==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&traveling==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&traveling==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&traveling==true&&elder_adult==true){
        var src = document.getElementById("x")
    }
    else if  (male==true&&traveling==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///m_arts&crafts
    else if  (male==true&&art_and_crafts==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&art_and_crafts==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&art_and_crafts==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&art_and_crafts==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&art_and_crafts==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///m_music
    else if  (male==true&&music==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&music==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&music==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&music==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&music==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    ///m_reading/writing
    else if  (male==true&&reading_or_writing==true&&preteen==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&reading_or_writing==true&&young_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&reading_or_writing==true&&adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&reading_or_writing==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&reading_or_writing==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

    else if  (male==true&&reading_or_writing==true&&elder_adult==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }
    else if  (male==true&&reading_or_writing==true&&elderly==true){
    document.getElementById("pichide").style.visibility = 'visible';

    }

}


