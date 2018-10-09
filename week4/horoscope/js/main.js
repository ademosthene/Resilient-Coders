document.getElementById('submit').onclick = getBirthday
function getBirthday(){
  // Stores value of the date
  var date = document.getElementById('date').value
  console.log(date);
  // Splits value of the date into month and day
  var dateArray = date.split("/")
  // Stores dateArray index 0 as month
  var month = dateArray[0];
  // Stores dateArray index 1 as integer in day
  var day = parseInt(dateArray[1]);
  console.log(month,day)
  getHoroscope(month,day)
}
function getHoroscope(month,day){
// Compare date to zodiac ranges
if(month == "03" && day >= 21 || month == "04" && day <= 19){
  displayCompleteMessage("ARIES");
  displayCompleteMessage2("It sounds simple, but it's true: If you want to get a clearer picture of where you're headed, open your eyes. Lately, there has been a lot of change and activity that's clouded your view and distracted you from what really matters. Quiet down a little and stop thinking about what 'could' be. Right now, wishing isn't going to get you anywhere. Accept things as they are, and you will find much to enjoy. There is positive stimulation around you, so reach out and get more involved in it.");
}else if(month == "04" && day >= 20 || month == "05" && day <= 20){
  displayCompleteMessage("TAURUS");
  displayCompleteMessage2("Even if you feel pressed for time, don't take any shortcuts in your work. If you cut corners, you will miss out on some nuances that the powers that be are looking for. This 'no shortcut' rule applies to friendships too -- go the long way to get to your destination. Generous gifts or spoiling someone with luxury isn't the way to build your relationship. Rather, you need to be open with your emotions and share some everyday moments if you want to get closer.");
}else if(month == "05" && day >= 21 || month == "06" && day <= 20){
  displayCompleteMessage("GEMINI");
  displayCompleteMessage2("The inspiration and energy you've been waiting for will roar in first thing this morning. Hop on this righteous wave of productivity and ride it for all it's worth, because it won't likely last all day. Others will get a kick out of your new and improved attitude, and you could even gain some support from former foes. Intellectual ideas aren't going to appeal to you much; it's all about action and adventure. Move with big gestures and laugh the loudest!");
}else if(month == "06" && day >= 21 || month == "07" && day <= 22){
  displayCompleteMessage("CANCER");
  displayCompleteMessage2("You will be brimming with a heaping helping of get-up-and-go, but it will be difficult to finalize anything. A lot of details are still up in the air, and the uncertainty around you will only grow for the next few days. Luckily, you have many new people and commitments to keep you busy. With the increase in activity in your life right now, concentration might be difficult to achieve and even more difficult to hold on to for any great length of time.");
}else if(month == "07" && day >= 23 || month == "08" && day <= 22){
  displayCompleteMessage("LEO");
  displayCompleteMessage2("You're sharp as can be, handling all your tasks and commitments with a dancer's grace, so you may not feel overwhelmed or in need of any help. What you may not realize is that if you just put a few minutes into improving your organization, you could end up saving hours of time. Efficiency isn't boring -- it's the only thing holding you back from having a freer social calendar! Reprioritizing your tasks and sorting things out will put you in the lead.");
}else if(month == "08" && day >=23 || month == "09" && day <= 22){
  displayCompleteMessage("VIRGO");
  displayCompleteMessage2("Putting up walls between yourself and the people you love is not a good idea right now -- you need to keep those healthy connections alive, and the best way to do so is to keep it real and engage in some secret-sharing. However, when it comes to your public relationships, you need to make sure your walls are sturdy and high. Create a buffer you can hide behind. Protecting your privacy should be a major goal right now -- not everyone deserves your trust.");
}else if(month == "09" && day >=22 || month == "10" && day <= 22){
  displayCompleteMessage("LIBRA");
  displayCompleteMessage2("If you feel like slowing down, then you have perfect timing -- because one or two fascinating people will come into your world and they deserve your careful, studied attention. Skip past the small talk and get right to the heart of what's on your mind. They can handle the direct approach and will match you witty remark with another witty remark. Your opinions may be challenged, but you will have a great time defending your position. Keep an open mind, and let yourself learn something new.");
}else if(month == "10" && day >= 23 || month == "11" && day <= 21){
  displayCompleteMessage("SCORPIO");
  displayCompleteMessage2("Open yourself up to the idea that expression is necessary to get you to the next level of happiness. In other words, for a healthier life, you need to share your feelings -- no matter what they are. Utilize your personality and express yourself in the best way you know how. Singing, dancing, cooking or even just goofing around are all great ways to display how you're feeling. If you keep your emotions inside or mask them, then you'll be wasting your time.");
}else if(month == "11" && day >= 22 || month == "12" && day <= 21){
  displayCompleteMessage("SAGITTARIUS");
  displayCompleteMessage2("Relationships are challenging to you -- everyone seems to be in the middle of an argument or in a state of utter confusion. You can't solve everyone else's problems right now, and frankly, you shouldn't. How two other people relate to each other is their own business -- so stick to the sidelines. Let everyone know you're there when they need you, but don't give them the impression you've taken any one side. Things are more complicated than you may realize.");
}else if(month == "12" && day >= 22 || month == "01" && day <= 19){
  displayCompleteMessage("CAPRICORN");
  displayCompleteMessage2("Blessed with a great positive energy, you'll be spreading joy to everyone you meet. Liberally toss sunny smiles at people -- the driver in the car next to you, a stranger on the street and definitely that grouchy guy in the elevator. By putting happy energy out into the world (even in a tiny way) you're creating a happier environment. It's sort of like forming a bubble of joy all around you. It's easier than it sounds -- so give it a try!");
}else if(month == "01" && day >= 20 || month == "02" && day <= 18){
  displayCompleteMessage("AQUARIUS");
  displayCompleteMessage2("Fun and games are perfectly okay, but they don't pay the rent; if you get the drift. Put away your party shoes and put on your work boots -- you've got some major stuff to do! At first, you may dread the work, but as the day goes on you'll get into a rhythm that will take you further than you thought you could go, and in half the time. So dive right in, and get going -- the sooner you start, the sooner you'll finish! Then you can get back to the games.");
}else if(month == "02" && day >= 19 || month == "03" && day <= 20){
  displayCompleteMessage("PISCES");
  displayCompleteMessage2("The time for research and planning is over -- get out there and do it! There's no time left for stalling, and this wall you need to scale isn't as high as you think. Start climbing now! Nail down travel plans and you may get a happy surprise that will free up some extra money in the budget; consider an upgrade. Being more proactive right now will put you on a higher energy level and give you strong momentum for finishing up some things you've been putting off.");
}
}

function displayCompleteMessage(msg){
	document.getElementById("sign").innerHTML=msg;
}
function displayCompleteMessage2(msg){
	document.getElementById("scope").innerHTML=msg;
}
