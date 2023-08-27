// continue Statement:
// এই স্টেটমেন্টের মানে হলো শর্তের মধ্যে যা থাকবে; তা বাদ দিয়ে লুপকে চলতে বলা।

for (i = 1; i < 10; i++) {
  if (i === 3 || i === 8) {
    continue;
  } else {
    console.log(i);
  }
}
