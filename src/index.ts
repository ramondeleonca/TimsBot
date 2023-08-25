import prompts from "prompts";
import puppeteer from "puppeteer";
import constants from "./constants";
import sleep from "sleep-promise";
import _ from "lodash";
import Cache from "./cache";

export async function main() {
    const cache = new Cache<{ restaurantNumber: string; date: number }>();

    // Ask for information
    let prompt = await prompts([
        {
            type: "text",
            name: "restaurantNumber",
            message: "Restaurant Number",
            initial: cache.get("restaurantNumber"),
            validate: (value: string) => /\d{6}/.test(value) ? true : "Please enter a valid restaurant number"
        },
        {
            type: "date",
            name: "date",
            message: "Date Of Visit",
            initial: cache.get("date") ? new Date(cache.get("date") as number) : new Date()
        }
    ]);

    // Update the cache
    cache.set("restaurantNumber", prompt.restaurantNumber);
    cache.set("date", prompt.date.getTime());

    // Log the information
    console.log("Starting browser, answering survey...")

    // Create the browser
    const browser = await puppeteer.launch({ headless: false });

    // Create the page
    const page = await browser.newPage();

    // Go to the survey
    await page.goto(constants.surveyURL);
    
    // Set the restaurant number
    await page.type(constants.restaurantNumberSelector, prompt.restaurantNumber);
    
    // Set the date of visit
    await page.type(constants.dateOfVisitSelector, `${prompt.date.getDate().toString().padStart(2, "0")}/${(prompt.date.getMonth() + 1).toString().padStart(2, "0")}/${prompt.date.getFullYear()}`);

    // Set the time of visit
    await page.select(constants.timeOfVisitHourSelector, prompt.date.getHours() > 12 ? `${prompt.date.getHours() - 12}` : `${prompt.date.getHours()}`);
    await page.select(constants.timeOfVisitMinuteSelector, `${prompt.date.getMinutes()}`);
    await page.select(constants.timeOfVisitAmPmSelector, prompt.date.getHours() > 12 ? "2" : "1");
    
    // Click the next button
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q1Selector);
    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q2Selector);
    await sleep(constants.safetyDelay);
    await page.click(constants.q2VerySatisfiedSelector);
    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q3Selector);
    await sleep(constants.safetyDelay);
    await page.type(constants.q3InputSelector, _.sample(constants.answers) as string);
    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q4Selector);
    await sleep(constants.safetyDelay);
    await page.click(constants.q4AnswerSelector);
    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q5Selector);
    await sleep(constants.safetyDelay);
    await page.click(constants.q5AnswerSelector);
    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q6Selector);
    await sleep(constants.safetyDelay);
    await page.click(constants.q6AnswerSelector);
    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q7Selector);
    await sleep(constants.safetyDelay);

    await page.click(constants.q7Answer1Selector);
    await sleep(constants.safetyDelay / 4);
    await page.click(constants.q7Answer2Selector);
    await sleep(constants.safetyDelay / 4);
    await page.click(constants.q7Answer3Selector);
    await sleep(constants.safetyDelay / 4);
    await page.click(constants.q7Answer4Selector);
    await sleep(constants.safetyDelay / 4);
    await page.click(constants.q7Answer5Selector);
    await sleep(constants.safetyDelay / 4);
    await page.click(constants.q7Answer6Selector);
    await sleep(constants.safetyDelay / 4);
    await page.click(constants.q7Answer7Selector);
    await sleep(constants.safetyDelay / 4);
    await page.click(constants.q7Answer8Selector);
    await sleep(constants.safetyDelay / 4);
    await page.click(constants.q7Answer9Selector);
    
    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q10Selector);
    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q11Selector);
    await sleep(constants.safetyDelay);

    await page.click(constants.q11Answer1Selector);
    await sleep(constants.safetyDelay);
    await page.click(constants.q11Answer2Selector);

    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q12Selector);
    await sleep(constants.safetyDelay);
    await page.click(constants.q12AnswerSelector);

    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q13Selector);
    await sleep(constants.safetyDelay);
    await page.click(constants.q13AnswerSelector);

    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q14Selector);
    await sleep(constants.safetyDelay);
    await page.click(constants.q14AnswerSelector);

    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q15Selector);
    await sleep(constants.safetyDelay);
    await page.click(constants.q15AnswerSelector);

    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q16Selector);
    await sleep(constants.safetyDelay);

    await page.click(constants.q16Answer1Selector);
    await sleep(constants.safetyDelay / 2);
    await page.click(constants.q16Answer2Selector);
    await sleep(constants.safetyDelay / 2);
    await page.click(constants.q16Answer3Selector);
    await sleep(constants.safetyDelay / 2);

    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q17Selector);
    await sleep(constants.safetyDelay);

    await page.click(constants.q17Answer1Selector);
    await sleep(constants.safetyDelay / 4);
    await page.click(constants.q17Answer2Selector);
    await sleep(constants.safetyDelay / 4);
    await page.click(constants.q17Answer3Selector);
    await sleep(constants.safetyDelay / 4);
    await page.click(constants.q17Answer4Selector);
    await sleep(constants.safetyDelay / 4);
    await page.click(constants.q17Answer5Selector);
    await sleep(constants.safetyDelay / 4);

    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q18Selector);
    await sleep(constants.safetyDelay);

    await page.click(constants.q18AnswerSelector);
    
    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q19Selector);
    await sleep(constants.safetyDelay);

    await page.type(constants.q19AnswerSelector, _.sample(constants.answers) as string);
    
    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q20Selector);
    await sleep(constants.safetyDelay);

    await page.type(constants.q20AnswerSelector, _.sample(constants.answers) as string);
    
    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q21Selector);
    await sleep(constants.safetyDelay);

    await page.click(constants.q21AnswerSelector);

    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q22Selector);

    await sleep(constants.safetyDelay);
    await page.click(constants.nextButtonSelector);

    // Answer the next question
    await page.waitForSelector(constants.q23Selector);
    await sleep(constants.safetyDelay);

    // await page.waitForSelector(constants.q23AnswerSelector);
    // await page.click(constants.q23AnswerSelector);

    // await sleep(constants.safetyDelay);
    // await page.click(constants.nextButtonSelector);

    // // Answer the next question
    // await page.waitForSelector(constants.q24Selector);
    // await sleep(constants.safetyDelay);

    // await page.waitForSelector(constants.q24AnswerSelector);
    // await page.click(constants.q24AnswerSelector);

    // await sleep(constants.safetyDelay);
    // await page.click(constants.nextButtonSelector);

    // // Answer the next question
    // await page.waitForSelector(constants.q25Selector);
    // await sleep(constants.safetyDelay);


    // await page.click(constants.q25AnswerSelector);

    // await sleep(constants.safetyDelay);
    // await page.click(constants.nextButtonSelector);

    // Get the end of survey element's text
    await page.waitForSelector(constants.endSelector);
    await sleep(constants.safetyDelay);
    
    await page.$(constants.endSelector).then(async element => {
        if (element) console.log((await element.getProperty("innerText")).toString());
    });

    await page.close();
    await browser.close();
}

main();