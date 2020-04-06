import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent implements OnInit {

  learn:{title:string, description:string, imageName:string}[];
  constructor() { }

  ngOnInit() {
    this.learn = [
      {title:"Gives new way to life, Gives Different perspective to life",
      description:"Reading Expose you to new things, new ways, new understanding, new information, new ways to handle situations and new ways to solve them, While reading you understand things in different perspective, it makes you realize and understand World and Yourself in a different way, Reading can help you to find out your hobbies, and can make you explore things which eventually becomes your career and success in future"
      ,imageName:"default"},
      {title:"Reading makes you smarter",
      description:"Reading helps you to be a better you, Through reading you can have a better understanding on a topic that interests you, This will help you to become better, As you all know books gives a lot of knowledge and information, which can be really very beneficial, As it says Knowledge is the key to success and hence having knowledge about life, about different things will help you to move ahead in life and will make your brain sharper and make you smarter. Knowledge gives you the better understanding, Reading is an effective memory booster, Reading and memory are an interrelated concept when you are reading; you are training your brain, and reading gives wisdom to your mind."
      ,imageName:"default"},
      {title:"Reading Increase creativity and Imagination",
      description:"Reading your imagination and Creativity increases, It gives you different ideas and understanding, Good reader from the young age can become a good writer, Reading sparks the imagination, When you read, you are taken into the new world, This thing nurtures your brain to develop ideas for new worlds and other possibilities, this sparks imagination. Reading helps you to understand differently."
      ,imageName:"default"},
      {title:"Improves memory",
      description:"Our mind is an amazing thing, which can remember a lot of things with relative ease, But We Usually don’t use our brain as per its capability, we just fill our brain with negativity and bad thoughts which stops the growth of our brain, And our brain stick to that Fixed mindset, Our mind has a marvelous capabilities and Capacity, it just need a workout just like our body, in order to give its best performance."
      ,imageName:"default"}
    ];
  }

}
