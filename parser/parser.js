const fs = require('fs');
const { resourceUsage } = require('process');
const puppeteer = require('puppeteer');
Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
        return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
        }, []);
    }
});
const link = "https://prielbrusie-ski.ru/";
(async () => {
    let flag = true;
    let counter = 0;
    try {
        const browser = await puppeteer.launch({
            headless: true,
            slowMo: 100,
            devtools: true
        });
        const page = await browser.newPage();
        await page.setViewport({
            width:900, height: 700
        });
        await page.goto(link);
        await page.waitForSelector('footer.container');
        let hotelObjects = await page.evaluate(async () => {
          let content = [];
          try{
              let divs = document.querySelectorAll('div.hotelblock');
              for (const div of divs) {
                  let header = div.querySelector('h3');
                  let headerLink = header.querySelector('a');
                  let hotelNumber = parseInt(div.getAttribute('class').replace(/[^\d]/g, ''));
                  let latlng = [];
                  let parsedObjects = [
                      {
                        object_name: "post",
                        object_id: "4953",
                        title: "\u042d\u0441\u0435\u043d",
                        lat: "43.2456245",
                        lng: "42.5219040",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4951",
                        title: "\u042d\u043b\u044c\u0442\u0443\u0440",
                        lat: "43.2657318",
                        lng: "42.4802475",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4949",
                        title: "\u042d\u043b\u044c\u0431\u0440\u0443\u0441\u0438\u044f",
                        lat: "43.2564850",
                        lng: "42.5151024",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4946",
                        title: "\u042d\u043b\u044c\u0431\u0440\u0443\u0441",
                        lat: "43.2472687",
                        lng: "42.6230507",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4916",
                        title: "\u042d\u043b\u044c\u0431\u0430",
                        lat: "43.2481499",
                        lng: "42.5754280",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4914",
                        title: "\u042d\u0434\u0435\u043b\u044c\u0432\u0435\u0439\u0441",
                        lat: "43.2490425",
                        lng: "42.6109657",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4912",
                        title: "\u0428\u0430\u0445\u0435\u0440\u0435\u0437\u0430\u0434\u0430",
                        lat: "43.2664032",
                        lng: "42.4770355",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4910",
                        title: "\u0427\u044b\u0440\u0430\u043d \u0427\u0435\u0433\u0435\u0442",
                        lat: "43.2463570",
                        lng: "42.5242729",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4908",
                        title: "\u0427\u044b\u0440\u0430\u043d-\u0410\u0437\u0430\u0443",
                        lat: "43.2661171",
                        lng: "42.4808731",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4905",
                        title: "\u0427\u0435\u0433\u0435\u0442",
                        lat: "43.2466164",
                        lng: "42.5226059",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4903",
                        title:
                          "\u0425\u0438\u0436\u0438\u043d\u0430 \u041b\u043e\u0433\u043e\u0432\u043e",
                        lat: "43.2649231",
                        lng: "42.4852905",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4901",
                        title:
                          "\u0421\u043e\u0441\u043d\u043e\u0432\u044b\u0439 \u0411\u043e\u0440",
                        lat: "43.2509880",
                        lng: "42.5220261",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4861",
                        title:
                          "\u0421\u043d\u0435\u0436\u043d\u044b\u0439 \u0411\u0430\u0440\u0441",
                        lat: "43.2467766",
                        lng: "42.5264626",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4828",
                        title: "\u0421\u0435\u043c\u0435\u0440\u043a\u0430",
                        lat: "43.2464714",
                        lng: "42.5212212",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4826",
                        title:
                          "\u0421\u0435\u0434\u044c\u043c\u043e\u0439 \u0440\u0435\u0433\u0438\u043e\u043d",
                        lat: "43.2586784",
                        lng: "42.5063858",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4798",
                        title: "\u0421\u0430\u043b\u0430\u043c",
                        lat: "43.2560310",
                        lng: "42.5151749",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4796",
                        title: "\u041f\u043e\u0432\u043e\u0440\u043e\u0442",
                        lat: "43.2479935",
                        lng: "42.5251732",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4794",
                        title: "\u041f\u0438\u043a \u0415\u0432\u0440\u043e\u043f\u044b",
                        lat: "43.2507973",
                        lng: "42.6317749",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4792",
                        title:
                          "\u041e\u0437\u043e\u043d \u0427\u0435\u0433\u0435\u0442 (Ozon Cheget)",
                        lat: "43.2460747",
                        lng: "42.5241737",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4790",
                        title:
                          "\u041e\u0437\u043e\u043d \u0413\u0440\u0430\u043d\u0434 (Ozon Grand)",
                        lat: "43.2491875",
                        lng: "42.6361732",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4788",
                        title:
                          "\u041e\u0437\u043e\u043d 7 \u0432\u0435\u0440\u0448\u0438\u043d",
                        lat: "43.2485504",
                        lng: "42.5385895",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4786",
                        title: "\u041d\u0443\u0440\u0435\u043b\u044c (Nur EL)",
                        lat: "43.2665253",
                        lng: "42.4790382",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4784",
                        title: "\u041b\u0435\u0433\u0435\u043d\u0434\u0430",
                        lat: "43.2460861",
                        lng: "42.5264702",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4781",
                        title: "\u041b\u0430\u0433\u0443\u043d\u0430",
                        lat: "43.2482262",
                        lng: "42.5275612",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4777",
                        title: "\u041a\u0443\u043f\u043e\u043b",
                        lat: "43.2563248",
                        lng: "42.5154572",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4774",
                        title: "\u041a\u0440\u0438\u0441\u0442\u0430\u043b\u043b 139",
                        lat: "43.2482147",
                        lng: "42.5243645",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4743",
                        title: "\u041a\u0411\u0413\u0423",
                        lat: "43.2508392",
                        lng: "42.6385078",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4741",
                        title: "\u0418\u0442\u043a\u043e\u043b",
                        lat: "43.2478256",
                        lng: "42.5412788",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4739",
                        title:
                          "\u0417\u0430\u043f\u043e\u0432\u0435\u0434\u043d\u0430\u044f \u0421\u043a\u0430\u0437\u043a\u0430",
                        lat: "43.2458992",
                        lng: "42.5261497",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4737",
                        title: "\u0416\u0430\u043d\u0422\u0430\u043c\u0410\u043b\u044c",
                        lat: "43.2485657",
                        lng: "42.5238342",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4733",
                        title: "\u0412\u043e\u043b\u044c\u0444\u0440\u0430\u043c",
                        lat: "43.2549057",
                        lng: "42.5131454",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4730",
                        title: "\u0412\u0438\u0440\u0430\u0436",
                        lat: "43.2667313",
                        lng: "42.4821854",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4728",
                        title: "\u0412\u0435\u0440\u0448\u0438\u043d\u0430",
                        lat: "43.2672119",
                        lng: "42.4785004",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4726",
                        title: "\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c",
                        lat: "43.2659760",
                        lng: "42.4792061",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4724",
                        title: "\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                        lat: "43.2657852",
                        lng: "42.4827080",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4721",
                        title: "\u0410\u043d\u0442\u0430\u0443",
                        lat: "43.2661057",
                        lng: "42.4823303",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4718",
                        title: "\u0410\u043b\u044c\u043f\u0438\u043d\u0430",
                        lat: "43.2662468",
                        lng: "42.4818153",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4716",
                        title:
                          "Sky Elbrus (\u0421\u043a\u0430\u0439 \u042d\u043b\u044c\u0431\u0440\u0443\u0441)",
                        lat: "43.2462082",
                        lng: "42.6355171",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4713",
                        title: "Sky Azau (\u0421\u043a\u0430\u0439 \u0410\u0437\u0430\u0443)",
                        lat: "43.2657013",
                        lng: "42.4788208",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4711",
                        title: "Azau Star (\u0410\u0437\u0430\u0443 \u0421\u0442\u0430\u0440)",
                        lat: "43.2657242",
                        lng: "42.4774132",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      {
                        object_name: "post",
                        object_id: "4688",
                        title: "\u0421\u043c\u0430\u0439\u043b (Smile)",
                        lat: "43.2493172",
                        lng: "42.5284195",
                        author_name: "sonm",
                        terms: { location: [400] },
                      },
                      {
                        object_name: "post",
                        object_id: "4669",
                        title:
                          "\u041e\u0437\u043e\u043d \u041b\u0430\u043d\u0434\u0445\u0430\u0443\u0441",
                        lat: "43.2487030",
                        lng: "42.6346703",
                        author_name: "sonm",
                        terms: { location: [401] },
                      },
                      {
                        object_name: "post",
                        object_id: "4664",
                        title: "\u041c\u0435\u0440\u0438\u0434\u0438\u0430\u043d",
                        lat: "43.2656708",
                        lng: "42.4787941",
                        author_name: "sonm",
                        terms: { location: [399] },
                      },
                      ];
                  parsedObjects.forEach(ob => {
                      if (ob['object_id'] === hotelNumber.toString()){
                          latlng = [ob['lng'],ob['lat']]
                      }
                  });
                  let hotelObject = {
                      type: 'Feature',
                      geometry: {
                          type: 'Point',
                          coordinates: latlng
                      },
                      properties: {
                          name: headerLink.innerText,
                          pageLink: headerLink.getAttribute('href'),
                          type: header.querySelector('small').innerText,
                          place: div.querySelector('div.hotel-level-label').innerText,
                          address: div.querySelector('div.selectedcontent_item').innerText.slice(7),
                          imagePreviewLink: div.querySelector('div.photoarea').getAttribute('data-bg'),
                          imageLinks: [],
                          description: []
                      }
                  };
                  content.push(hotelObject);
              };
              return content;
          }catch(e){
              console.log(e);
              browser.close();
          }
        });
        console.log('Получен список отелей c ' + link);
        for (const hotelObject of hotelObjects) {
          try{
            const hotelPage = await browser.newPage();
            await hotelPage.bringToFront();
            await hotelPage.goto(`${hotelObject.properties.pageLink}`);
            await hotelPage.waitForSelector('footer.container');
            let content = await hotelPage.evaluate(async () => {
              let hotelDescription = [];
              try{
                flag = true;
                counter = 1;
                while (flag){
                  if ((document.querySelector(`div.hentry:nth-child(1) > p:nth-child(${counter})`) != null)) {
                    hotelDescription.push(document.querySelector(`div.hentry:nth-child(1) > p:nth-child(${counter})`).innerText);
                  };
                  if (document.querySelector(`div.hentry:nth-child(1) > h5:nth-child(${counter})`) != null) {flag = false};
                  counter++;
                };
                return hotelDescription;
              }catch(e){
                console.log(e);
                browser.close();
              }
            });
            // hotelObject.properties.description.push(content);
            content.forEach(desc =>{
              hotelObject.properties.description.push(desc)
            })
            console.log(hotelObject.properties.name);
            let galleryLink = await hotelPage.evaluate(async ()=> {
              let link = document.querySelector('a.gallerylink').getAttribute('href');
              return link;
            });
            // console.log(galleryLink);


            const galleryPage = await browser.newPage();
            await galleryPage.bringToFront();
            await galleryPage.goto(`${galleryLink}`);
            await galleryPage.waitForSelector('footer.container');
            let hotelImageLinks = await galleryPage.evaluate(async () => {
              let imageLinks = [];
              try{
                let divs = document.querySelectorAll('div.ngg-gallery-thumbnail');
                divs.forEach(div => {
                  let imageLink = div.querySelector('a.ari-fancybox').getAttribute('href');
                  imageLinks.push(imageLink);
                });
                return imageLinks;
              }catch(e){
                console.log(e);
                browser.close();
              }
            });
            // hotelObject.properties.imageLinks.push(hotelImageLinks);
            hotelImageLinks.forEach(l =>{
              hotelObject.properties.imageLinks.push(l);
            })
            console.log('Получены данные об отеле ' + hotelObject.properties.name);
            await galleryPage.close();
            await hotelPage.close();
            await page.bringToFront();
          }catch(e){
            console.log(e);
            browser.close();
          }
        }
        fs.writeFile('prielbrusie.json', JSON.stringify({'type': 'FeatureCollection','features': hotelObjects}), err => {
          if(err) throw err
          console.log('prielbrusie.json saved');
          console.log('prielbrusie.json length - ', hotelObjects.length);
        });
        await browser.close();
    } catch(e) {
        console.log(e);
        browser.close();
    }

})();
