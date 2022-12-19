const { Content } = require('../models');

const seedContent = async () => {

  await Content.deleteMany({});

  const data = await Content.insertMany(
    [
      {
        title: `Intro to Skincare 101`,
        description: `Dive deeper on the most common misconceptions of skincare. This course will go over the many behaviors and environmental factors that influence skin health, how to recognize the best skin products for each skin type and how to build a skincare routine.`,
        cost: `$300`,
        image: `1`,
        video: ``,
      },
      {
        title: `Skin Anatomy 101`,
        description: `Let’s get into the nitty gritty. I believe that knowing the basic anatomy and physiology of skin helps you to understand it’s key functions, what it needs to be healthy, function optimally, and how treatments tie in. Knowledge is power. Take this course to understand the biology of skin.`,
        cost: `$350`,
        image: `8`,
        video: ``,
      },
      {
        title: `Acne 101`,
        description: `Most of us have had to deal with acne at some point or another as it is a common chronic inflammatory skin condition that affects about 89% of adolescents, and often persists into adulthood due to a myriad of reasons. We'll dive in deeper on the causes and types of acne and the best practices to deal with it.`,
        cost: `$250`,
        image: `9`,
        video: ``,
      },
      {
        title: `Collagen 101`,
        description: `Collagen is EVERYWHERE. Literally. If you've explored any portion of the skin-care world, then you're likely familiar with collagen, the amazing protein that deserves all of the hype that it receives. Understanding this dermal protein is imperative in understanding skin aging. Let's talk more about it. `,
        cost: `$250`,
        image: `2`,
        video: ``,
      },
      {
        title: `The Many Benefits of Facial Message`,
        description: `Facial massage not only feels amazing, but it also relieves tension, reduces stress, and increases circulation which plays an important role in skin aging. Many of us tend to hold stress in our faces and frequent facial massages are great for both relaxation and skin health. Learn about all the benefits in this quick and easy course.`,
        cost: `$100`,
        image: `3`,
        video: ``,
      },
      {
        title: `Why You Should Wear SPF Everyday`,
        description: `Yes, every day. Yes, inside. Yes, during the winter. Yes, when it’s cloudy. The most important product you can use is Sun Protection Factor otherwise known as SPF, but why? Join us in this course to learn the importance of SPF and why you should apply it everyday no matter what.`,
        cost: `$200`,
        image: `4`,
        video: ``,
      },
      {
        title: `Hyperpigmentation 101`,
        description: `From freckles to melasma, pigmentation changes in the skin are a common occurrence most people will experience through different stages of life. However, the causes of hyperpigmentation (also known as dyschromia) are often misunderstood, and the road to correcting discoloration can seem elusive and long. This course will cover the different causes of hyperpigmentation and how to combat them in a safe way.`,
        cost: `$250`,
        image: `5`,
        video: ``,
      },
      {
        title: `The Importance of Retinol`,
        description: `There are a wide number of factors to consider when it comes to maintaining radiant skin, but arguably the most important molecule, the one which is responsible for both optimal function and repairs to our DNA, is Vitamin A, otherwise known as retinol.
        
        Vitamin A is the MVP of any reputable skincare routine (other than SPF, which is nonegtioable), and there are many different types of topical vitamin A, such as retinoids, retinols, retinals, tretinioin, retinoic acid, and adapalene. These derivatives of vitamin A are extremely effective at slowing the aging process, among other things. This course will cover all of this and more.`,
        cost: `$200`,
        image: `6`,
        video: ``,
      },
      {
        title: `LED Light Therapy`,
        description: `LED light therapy can increase circulation, accelerate tissue repair, kill acne bacteria, decrease inflammation, improve skin tone, texture and clarity, decrease under eye wrinkles as well as ease muscle and joint pain, stiffness, spasm, and pain associated with arthritis.

        Simply put, LED therapy provides compromised cells with added energy so that the cell’s performance is enhanced. Learn more by taking this course with us.`,
        cost: `$300`,
        image: `7`,
        video: ``,
      },
    ],
  ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));

}

module.exports = { seedContent };
