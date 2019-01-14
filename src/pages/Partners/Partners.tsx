import React, { Suspense } from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Seperator } from '../../components/Seperator/Seperator';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import { Section } from '../../components/Section/Section';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import { List } from '../../components/List/List';
import { TicketPrice } from '../../components/TicketPrice/TicketPrice';
import VideoSource from '../../components/Jumbotron/VideoSource';
import { useCanPlayVideoType } from '../../core/hooks/UseCanPlayVideoType';
import { PartnerPriceList, PartnerPrice } from '../../components/PartnerPrices/PartnerPrices';

export function Partners() {
    const canPlayWebm = useCanPlayVideoType('webm');
    return (
        <>
            <PageBanner header="Partner love <3" subHeader="September 11th - 12th, 2019" imageName="partners_2" />
            <Seperator />
            <CenterSection header={<h1>JavaZone 2019: Bigger and better than ever</h1>}>
                <p>
                    JavaZone started out in 2002 as a small conference for Java developers but has since then evolved to become one of the largest developer conferences in the world. Each year thousands of people gather in Oslo Spektrum for three full days of learning, mingling, and fun!
                </p>
            </CenterSection>
            <Section header={<h1>Last two years: Completely. Sold. Out.</h1>}>
                <p>
                    We want JavaZone‘s Expo Area to be an attractive space where our Partners and participants can hang out and spend time together. In previous years our Partners have done a great job to help us achieve this goal, and we look forward to seeing what they bring to JavaZone 2018! JavaZone’s Expo Area is a vibrant, busy space full of life and activity. As a Partner you are not just supporting our conference economically – you participate in the event and help create a unique atmosphere. We work closely with our Partners to help them realize their ideas and make the most out of their stands. Have you got a great concept for your JavaZone stand and need help to realize it? Don’t be shy - just ask us. Almost anything is possible!
                </p>
            </Section>
            <Section header={<h1>Out philosophy: Partners, not sponsors</h1>}>
                <p>
                    We want JavaZone‘s Expo Area to be an attractive space where our Partners and participants can hang out and spend time together. In previous years our Partners have done a great job to help us achieve this goal, and we look forward to seeing what they bring to JavaZone 2018! JavaZone’s Expo Area is a vibrant, busy space full of life and activity. As a Partner you are not just supporting our conference economically – you participate in the event and help create a unique atmosphere. We work closely with our Partners to help them realize their ideas and make the most out of their stands. Have you got a great concept for your JavaZone stand and need help to realize it? Don’t be shy - just ask us. Almost anything is possible!
                </p>
            </Section>
            <ImageSection bottom imageName="2018/180912_JavaZone_0098" />
            <Seperator />
            <CenterSection header={<h1>The Expo Area</h1>}>
                <p>
                    All our partner stands are traditionally located in the Expo Area, which is centrally located in the venue. During each break, the Expo is full of attendees. This is partly because we serve food continuously from restaurant stands throughout the day, and partly because of you – our Partners – make this area one of the liveliest Expo Areas of any conference.
                </p>
                <p>
                    Don‘t you believe us? Have a look for yourself! Our new Partners are always surprised by the huge attention their stands receive in the Expo Area. We have put together a short 15-second timelapse from 2 hours of Expo time, showing both the flow of people during talks and in the breaks between talks. Yes, you get exposure to that many people, for a total of 20 hours!
                </p>
                <p>
                    <i>The video below shows a time lapse of the JavaZone 2018 event.</i>
                </p>
            </CenterSection>
            <CenterSection>
                <Suspense fallback={<img src="splash.jpg" />}>
                    <video style={{width: '100%'}} muted controls id="backgroundLapse">
                        <VideoSource canPlayWebm={canPlayWebm} />
                        Your browser does not support HTML5 video.
                    </video>
                </Suspense>
            </CenterSection>
            <Section header={<h1>Partner Options</h1>}>
                <p>
                    Even though all Partners are considered equal, there are a few options to choose from. There is a base package that everyone gets, and then there are a few available expansions. Notice that these expansions have a limited availability.
                </p>
                <h2>Included in all partnerships</h2>
                <List>
                    <li>A 6 square meter stand space in the central arena at Oslo Spektrum with two side walls.</li>
                    <li>4 tickets to the conference for manning the stand.</li>
                    <li>Discounted participant tickets for your employees.</li>
                    <li>Branding on <InlineLink external url="https://www.javazone.no">javazone.no</InlineLink>, at the venue, the program and in other promotional material that JavaZone produces.</li>
                </List>
                <h2>Possible expansions</h2>
                <h4>Double Stand Space</h4>
                <List>
                    <li>Double the stand area to 12 square meters.</li>
                    <li>One long back wall. It is also possible to divide the area in two if you would prefer.</li>
                </List>
                <h4>Restaurant Stand</h4>
                <List>
                    <li>A dedicated food stand serving food throughout the conference. The menu will be decided in collaboration between yourselves and our event partners.</li>
                    <li>Approx. 108 square meters (12 x 9).</li>
                    <li>4 meter high back wall.</li>
                </List>
                <h4>Concept Stand</h4>
                <List>
                    <li>A large space for presenting your own 'concept'. This could be, for example, a gaming area, a coffee bar, or a chillout area.</li>
                    <li>Approx. 70 square meters (10 x 7).</li>
                    <li>4 meter high back wall.</li>
                </List>
            </Section>
            <Seperator />
            <CenterSection header={<h1>Partnership prices</h1>}>
                <TicketPrice>71.000</TicketPrice>
                <p>
                    <i>Note that all 50 partnerships for JavaZone 2018 were sold out long before the conference.</i>
                </p>
                <p>
                    All partnerships have a base price for entry which gives you everything described above.
                    We also have some add ons, as well as tickets for your employees, priced below.
                </p>
                <p>
                    <i style={{fontSize: '1.2rem'}}>After 1st of March the price will increase to NOK 86.000,-.</i><br />
                    <i style={{fontSize: '1rem'}}>All prices are ex VAT.</i>
                </p>
            </CenterSection>
            <Section header={<h1>Partnership stand</h1>}>
                <PartnerPriceList>
                    <PartnerPrice item="Extra Stand Space">38.000</PartnerPrice>
                    <PartnerPrice item="Restaurant Stand">65.000</PartnerPrice>
                    <PartnerPrice item="Restaurant Stand (Evening)">20.000</PartnerPrice>
                    <PartnerPrice item="Concept Stand">60.000</PartnerPrice>
                </PartnerPriceList>
            </Section>
            <Section header={<h1>Partnership ticket</h1>}>
                <PartnerPriceList>
                    <PartnerPrice item="Tickets for employees (0 - 30)">5.590</PartnerPrice>
                    <PartnerPrice item="Tickets for employees (31 - 50)">5.390</PartnerPrice>
                    <PartnerPrice item="Tickets for employees (51 - ∞)">5.190</PartnerPrice>
                    <PartnerPrice item="Tickets for employees (Late-Bird)">6.190</PartnerPrice>
                </PartnerPriceList>
            </Section>
            <ImageSection imageName="2018/180912_JavaZone_0158" />
            <Seperator />
            <CenterSection header={<h1>Contact us</h1>}>
                <p>You can contact us about partnership details at <InlineLink external url="mailto:partner@java.no">partner@java.no</InlineLink></p>
            </CenterSection>
        </>
    )
}
