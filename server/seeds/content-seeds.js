const { Content } = require('../models');

const seedContent = async () => {

  await Content.deleteMany({});

  const data = await Content.insertMany(
    [
      {
        title: `Intro to Skincare 101`,
        description: `Dive deeper on the most common misconceptions of skincare. This course will go over the many behaviors and environmental factors that influence skin health, how to recognize the best skin products for each skin type and how to build a skincare routine.`,
        cost: `1.99`,
        image: `../assets/SpacePicsForArticles/space1.png`,
        video: ``,
        creator: ``
      },
      {
        title: `Collagen 101`,
        description: `Collagen is EVERYWHERE. Literally. If you've explored any portion of the skin-care world, then you're likely familiar with collagen, the amazing protein that deserves all of the hype that it receives. Understanding this dermal protein is imperative in understanding skin aging. Let's talk more about it. `,
        cost: `2.99`,
        image: `../assets/SpacePicsForArticles/space2.png`,
        video: ``,
        creator: ``
      },
      {
        title: `The Many Benefits of Facial Message`,
        description: `Facial massage not only feels amazing, but it also relieves tension, reduces stress, and increases circulation which plays an important role in skin aging. Many of us tend to hold stress in our faces and frequent facial massages are great for both relaxation and skin health. Learn about all the benefits in this quick and easy course.`,
        cost: `3.99`,
        image: `../assets/SpacePicsForArticles/space3.png`,
        video: ``,
        creator: ``
      },
      {
        title: `Why You Should Wear SPF Everyday`,
        description: `If you're unhappy with shaving, tweezing, or waxing to remove unwanted hair and especially if you have sensitive skin laser hair removal may be an option worth considering. With its high degree of accuracy and minimal pain, laser hair removal can remove unwanted hair in a fraction of the time it takes other methods.`,
        cost: `4.99`,
        image: `../assets/SpacePicsForArticles/space4.png`,
        video: ``,
        creator: ``
      },
      {
        title: `Hyperpigmentation 101`,
        description: `Fractional laser is designed to treat surgical and acne scars on any area of the body, including the face. It can be safely used on most skin types. During your consultation, we will determine if you are a good candidate for the procedure based on a variety of factors. `,
        cost: `5.99`,
        image: `../assets/SpacePicsForArticles/space5.png`,
        video: ``,
        creator: ``
      },
      {
        title: `Natural vs. Medical Grade Products`,
        description: `This service is a Treatment Facial PLUS Microneedling to stimulate the top layers of the skin which release of natural growth factors naturally encouraging rebuilding your own collagen and elastin in order to improve fine lines, wrinkles, sagging skin, texture & tone. Multiple treatments and home-care are recommended for optimal results and 3-5 days downtime is typical.

        Client is required to bring their own UPF protection to the appointment as sunscreen cannot be applied after needling and light exposure can damage the freshly needled skin. Bluestone shields are available to purchase at your appointment time.`,
        cost: `6.99`,
        image: `../assets/SpacePicsForArticles/space6.png`,
        video: ``,
        creator: ``
      },
      {
        title: `LED Light Therapy`,
        description: `A lifting technique designed to give you longer-looking lashes without the need for lash extensions. All treatments include a lash tint for your upper lashes, though this may not replace mascara for those clients with petite or fine lashes.  `,
        cost: `7.99`,
        image: `../assets/SpacePicsForArticles/space7.png`,
        video: ``,
        creator: ``
      },
      {
        title: `Skin Anatomy 101`,
        description: `Laser resurfacing facial is a revolutionary cosmetic procedure that uses laser beams to improve the look of your skin. This non-surgical treatment works by targeting damaged or wrinkled areas and eliminates dead cells, resulting in a diminished appearance of fine lines, wrinkles, enlarged pores and acne scars. *All new clients must book a consultation prior to making any booking for laser services. `,
        cost: `8.99`,
        image: `../assets/SpacePicsForArticles/space8.png`,
        video: ``,
        creator: ``
      },
      {
        title: `Acne 101`,
        description: `Intense pulsed light (IPL) therapy, aka photofacial, is a way to improve the color and texture of your skin without surgery. It can undo some of the visible damage caused by sun exposure — called photoaging. You may notice it mostly on your face, neck, hands, or chest where your skin has been exposed to light the most.

        IPL is indicated if you have red, brown, or splotchy skin and have relatively fair skin.`,
        cost: `9.99`,
        image: `../assets/SpacePicsForArticles/space9.png`,
        video: ``,
        creator: ``
      },
    ],
  ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));

}

module.exports = { seedContent };
