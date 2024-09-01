function you()
{
    alert("Welcome my Time Table");

}
function abrar() {

    var sc = document.getElementById("sc").value;
    var mon = document.getElementById('mon').value;
    var tue = document.getElementById('tue').value;
    var wed = document.getElementById('wed').value;
    var thu = document.getElementById('thu').value;
    var fri = document.getElementById('fri').value;
    var sat = document.getElementById('sat').value;
    var sun = document.getElementById('sun').value;

    // To Cler Chet to all prgm
    if (document.getElementById("div").selected == true) {
        alert("Plese Select a Divion");
    }
    else if (document.getElementById("sc").selected == true) {
        alert("Plese Select a days ");
    }
    else if (document.getElementById("0").selected == true) {
        alert("Plese Select a Time ");
    }

    // div A
    if (document.getElementById("A").selected == true) {
        alert("You are From A Batch")
        // monday
        if (document.getElementById("mon").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 1 : Data structure LAB 1(DS)";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 1 : Data structure LAB 1(Ds)";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : exnage Markup Language (XML)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Interoduction Object Orinted Programing (IOOP)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Digital Logic circuit B1(DLC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Digital Logic circuit B2(DLC)";
                document.getElementById("p4").innerHTML = "Your Subject is : numaric method(NM)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }
        // tuesday
        if (document.getElementById("tue").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is  : Data structure (DS)";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : FundaMentel Computer System (FOS)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : exnage Markup Language (XML)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Interoduction Object Orinted Programing (IOOP)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }

        // wednesday
        if (document.getElementById("wed").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 1 : exnage Markup Language LAB 1 (XML) ";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 1 : exnage Markup Language LAB 1 (XML)";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :Interoduction Object Orinted Programing (IOOP)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Green Computing (GC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Soft Skill Devlpoment (SSd)";
                document.getElementById("p4").innerHTML = "Your Subject is : Soft Skill Devlpoment (SSd)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Interoduction Object Orinted Programing (IOOP)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }

        //thursday
        if (document.getElementById("thu").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :Your Subject is  : Data structure (DS)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Green Computing (GC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Soft Skill Devlpoment (SSd)";
                document.getElementById("p4").innerHTML = "Your Subject is : Soft Skill Devlpoment (SSd)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : FundaMentel Computer System (FOS)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }

        // friday
        if (document.getElementById("fri").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 1 :Interoduction Object Orinted Programing LAB (IOOP)";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 1 :Interoduction Object Orinted Programing LAB (IOOP)";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :exnage Markup Language LAB 1 (XML)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Your Subject is  : Data structure (DS)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Green Computing (GC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Soft Skill Devlpoment (SSd)";
                document.getElementById("p4").innerHTML = "Your Subject is : Soft Skill Devlpoment (SSd)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }
        // saturday
        if (document.getElementById("sat").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :Interoduction Object Orinted Programing LAB (IOOP)";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is  :FundaMentel Computer System (FOS)";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :Your Subject is  : Data structure (DS)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :exnage Markup Language (XML)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Green Computing (GC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Soft Skill Devlpoment (SSd)";
                document.getElementById("p4").innerHTML = "Your Subject is : Soft Skill Devlpoment (SSd)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }
    }

    // Div B
    if (document.getElementById("B").selected == true) {
        alert("You Are From My Batch As Abrar shaikh");
        // monday
        if (document.getElementById("mon").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 1 : Data structure LAB 1(DS)";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 1 : Data structure LAB 1(DS)";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Interoduction Object Orinted Programing (IOOP)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : exnage Markup Language (XML)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Digital Logic circuit B1(DLC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Digital Logic circuit B2(DLC)";
                document.getElementById("p4").innerHTML = "Your Subject is : numaric method(NM)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :FundaMentel Computer System (FOS)";
            }
        }
        // tues
        if (document.getElementById("tue").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 2 : exnage Markup Language LAB 2 (XML)";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 2 : exnage Markup Language LAB 2 (XML) ";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :Interoduction Object Orinted Programing (IOOP)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : FundaMentel Computer System (FOS)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Data structure (DS)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :  exnage Markup Language (XML)";
            }
        }
        // wed
        if (document.getElementById("wed").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 1 : exnage Markup Language LAB 1 (XML)";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 1 : exnage Markup Language LAB 1 (XML) ";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :Data structure (DS)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Digital Logic circuit B1(DLC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Digital Logic circuit B2(DLC)";
                document.getElementById("p4").innerHTML = "Your Subject is : numaric method(NM)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :Interoduction Object Orinted Programing (IOOP)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :  exnage Markup Language (XML)";
            }
        }
        // thu
        if (document.getElementById("thu").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 2: Interoduction Object Orinted Programing LAB 2 (IOOP)";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 2 : Interoduction Object Orinted Programing LAB 2 (IOOP) ";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : exnage Markup Language (XML)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Digital Logic circuit B1(DLC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Digital Logic circuit B2(DLC)";
                document.getElementById("p4").innerHTML = "Your Subject is : numaric method(NM)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Data structure (DS)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }
        // fri
        if (document.getElementById("fri").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 1: Interoduction Object Orinted Programing LAB 1 (IOOP)";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 1 : Interoduction Object Orinted Programing LAB 1 (IOOP) ";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :  Interoduction Object Orinted Programing (IOOP)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : exnage Markup Language (XML)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Digital Logic circuit B1(DLC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Digital Logic circuit B2(DLC)";
                document.getElementById("p4").innerHTML = "Your Subject is : numaric method(NM)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : FundaMentel Computer System (FOS)";
            }
        }

        if (document.getElementById("sat").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 2: Data structure LAB 2(DS)";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 2 : Data structure LAB 2(DS)";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :  FundaMentel Computer System (FOS)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :Data structure (DS)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Digital Logic circuit B1(DLC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Digital Logic circuit B2(DLC)";
                document.getElementById("p4").innerHTML = "Your Subject is : numaric method(NM)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }
    }

    // div C
    if (document.getElementById("C").selected == true) {
        alert("You Are From C Batch ");
        // monday
        if (document.getElementById("mon").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Interoduction Object Orinted Programing (IOOP)";

            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Data structure (DS)";

            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :FundaMentel Computer System (FOS)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Digital Logic circuit B1(DLC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Digital Logic circuit B2(DLC)";
                document.getElementById("p4").innerHTML = "Your Subject is : numaric method(NM)";
            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }

        // tue
        if (document.getElementById("tue").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 2 : exnage Markup Language LAB 2 (XML)";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 2 : exnage Markup Language LAB 2 (XML)";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Interoduction Object Orinted Programing (IOOP)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Data structure (DS)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : exnage Markup Language  (XML)";

            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";

            }
        }

        // wed
        if (document.getElementById("wed").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Interoduction Object Orinted Programing (IOOP)";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is  : Data structure LAB 1(DS)";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :FundaMentel Computer System (FOS)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Digital Logic circuit B1(DLC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Digital Logic circuit B2(DLC)";
                document.getElementById("p4").innerHTML = "Your Subject is : numaric method(NM)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : exnage Markup Language (XML)";

            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }

        // thu
        if (document.getElementById("thu").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 2: Interoduction Object Orinted Programing LAB 2(IOOP) ";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 2 : Interoduction Object Orinted Programing LAB 2(IOOP) ";

            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :FundaMentel Computer System (FOS)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Digital Logic circuit B1(DLC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Digital Logic circuit B2(DLC)";
                document.getElementById("p4").innerHTML = "Your Subject is : numaric method(NM)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is  : exnage Markup Language  (XML)";

            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }

        // fri
        if (document.getElementById("fri").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : exnage Markup Language (XML)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is :FundaMentel Computer System (FOS)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Digital Logic circuit B1(DLC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Digital Logic circuit B2(DLC)";
                document.getElementById("p4").innerHTML = "Your Subject is : numaric method(NM)";

            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }

        // sat
        if (document.getElementById("sat").selected == true) {
            if (document.getElementById("1").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 2 : Data structure LAB 2(DS)";
            }
            if (document.getElementById("2").selected == true) {
                document.getElementById("p2").innerHTML = "Plese Go a Lab 2 : Data structure LAB 2(DS)";
            }
            if (document.getElementById("3").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Data structure (DS)";
            }
            if (document.getElementById("4").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Interoduction Object Orinted Programing (IOOP)";
            }
            if (document.getElementById("5").selected == true) {
                document.getElementById("p2").innerHTML = "Your Subject is : Digital Logic circuit B1(DLC)";
                document.getElementById("p3").innerHTML = "Your Subject is : Digital Logic circuit B2(DLC)";
                document.getElementById("p4").innerHTML = "Your Subject is : numaric method(NM)";

            }
            if (document.getElementById("6").selected == true) {
                document.getElementById("p2").innerHTML = "Congratiulion You Have no lecture on This Time";
            }
        }
    }


}