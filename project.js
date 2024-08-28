let stay = document.getElementById("stay");
let flights = document.getElementById("Flights");
let trains = document.getElementById("Trains");
let buses = document.getElementById("Buses");

stay.addEventListener("click", function() {
    window.open("https://www.booking.com/index.en-gb.html?aid=2311236;label=en-in-booking-desktop-SoQWfYhAMBURf0HSQntj1AS652796016141:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-334108349:lp9146362:li:dec:dm;ws=&gclid=Cj0KCQjwiOy1BhDCARIsADGvQnDyQvrGFCr3usuFxFaEVA6AyKJzWNyFXgSIWKV6NB0mKw16CtWJ-JYaAg4NEALw_wcB", "_blank");
});

flights.addEventListener("click", function() {
    window.open("https://www.goindigo.in/flight-booking.html", "_blank");
});

trains.addEventListener("click", function() {
    window.open("https://www.irctc.co.in/", "_blank");
});

buses.addEventListener("click", function() {
    window.open("https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwif256_8YyIAxXNYA8CHfSHD0gYABAAGgJ0Yg&co=1&gclid=CjwKCAjw5qC2BhB8EiwAvqa41rLuxxuRllsNhRBz_N8-15DuKyTJs5MCktMa3gaRwtgQinVxqsuagRoCWVkQAvD_BwE&ohost=www.google.com&cid=CAESVeD2XsJjf_b8sGjZ53PkQl09hCnQGYZ7tAkYQDzEaR0oQfiO8DoxGiNlth-SFIW5uVPhFhO4V7v6HCYGEyabJU6QjU8Jgk7RAedoPpsAeLTVxC0cYRI", "_blank");
});

// js for cards countries
let India = document.getElementById("India");
let Brazil = document.getElementById("Brazil");
let Indonesia = document.getElementById("Indonesia");
let Nepal = document.getElementById("Nepal");
let Australia = document.getElementById("Australia");
let USA = document.getElementById("USA");
let Russia = document.getElementById("Russia");
let Japan = document.getElementById("Japan");
let France = document.getElementById("France");

// adding event listeners 
India.addEventListener("click",function () {
    window.open("https://www.google.com/search?client=firefox-b-d&q=india+");
});
Brazil.addEventListener("click",function () {
    window.open("https://www.google.com/search?client=firefox-b-d&q=Brazil+");
});
Indonesia.addEventListener("click",function () {
    window.open("https://www.google.com/search?client=firefox-b-d&q=Indonesia+");
});
Nepal.addEventListener("click",function () {
    window.open("https://www.google.com/search?client=firefox-b-d&q=Nepal+");
});
Australia.addEventListener("click",function () {
    window.open("https://www.google.com/search?client=firefox-b-d&q=Australia+");
});
USA.addEventListener("click",function () {
    window.open("https://www.google.com/search?client=firefox-b-d&q=USA+");
});
Russia.addEventListener("click",function () {
    window.open("https://www.google.com/search?client=firefox-b-d&q=Russia+");
});
Japan.addEventListener("click",function () {
    window.open("https://www.google.com/search?client=firefox-b-d&q=Japan+");
});
France.addEventListener("click",function () {
    window.open("https://www.google.com/search?client=firefox-b-d&q=France+");
});

// register and signin user 
let register = document.getElementById("Register");
let Sign = document.getElementById("Sign-in");

register.addEventListener("click",function () {
    window.open("regis.html")
});
Sign.addEventListener("click",function () {
    window.open("sign-in.html")
})