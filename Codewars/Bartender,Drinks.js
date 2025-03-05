function getDrinkByProfession(profession){
    const drinks = [
        [
            "Jabroni" ,	"Patron Tequila"],
        [ "School Counselor" ,"Anything with Alcohol"],
        ["Programmer" ,	"Hipster Craft Beer"],
        ["Bike Gang Member" ,	"Moonshine"],
        ["Politician","Your tax dollars"],
        ["Rapper","Cristal"]
    ]
    return (drinks.find(([key]) => key.toLowerCase()  === profession.toLowerCase()) || ["", "Beer"])[1];

}
console.log(getDrinkByProfession("pOLitiCIaN")); 
console.log(getDrinkByProfession("unknown"));    
console.log(getDrinkByProfession("Programmer"))