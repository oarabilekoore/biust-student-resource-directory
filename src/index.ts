import { Application, LinearLayout, Paragraph, HorizontalRule } from "innerscope";
import FilledButton from "./components/buttons";
import { SearchBar } from "./components/searchbar";

const bsrd = new Application({
    title: 'Biust Resource Directory',
    scrollbarvisibility: "hidden",
})

bsrd.onStart(HomePage)

function HomePage(){
    const page = LinearLayout(bsrd.root);
    page.LayoutDirection = "TOP_TO_BOTTOM";
    page.ElementAlignment = "VCENTER"
    page.ScrollDirection = "VERTICAL"

    page.style.backgroundColor = "#1e1e1e"; 
    page.style.color = "#ffffff"; 
    page.style.minHeight = "100vh";
    page.style.fontFamily = "Arial, sans-serif";

    const hero_section = LinearLayout(page);
    hero_section.style.padding = "64px 32px";
    hero_section.style.textAlign = "center";
    hero_section.ParentFill = "FILLX";
    hero_section.LayoutDirection = "TOP_TO_BOTTOM";
    hero_section.ElementAlignment = "VCENTER"

    const hero_sectionTitle = Paragraph(
        "BIUST STUDENT RESOURCE DIRECTORY",
        hero_section);
    hero_sectionTitle.style.fontSize = "2rem";
    hero_sectionTitle.style.fontWeight = "bold";
    hero_sectionTitle.style.marginBottom = "16px";

    HorizontalRule(hero_section).style.width = "3rem";

    const hero_sectionDescription = Paragraph(
        "This project is built to provide students an easy way "+
        "to find study resources like"
        + "test papers, tutorial solutions related to their courses.",
        hero_section
    );
    hero_sectionDescription.style.fontSize = "1.1rem";
    hero_sectionDescription.style.color = "#cccccc";
    hero_sectionDescription.style.marginBottom = "32px";

    const hero_buttons = LinearLayout(hero_section);
    hero_buttons.style.display = 'flex';
    hero_buttons.style.flexDirection = 'column';
    hero_buttons.style.alignItems = 'center'
    hero_buttons.style.gap = '10px'

    FilledButton("Help us build a better directory",
    hero_buttons).onclick = () => {
        window.open('https://github.com/oarabilekoore/biust-student-resource-directory')
    }

    const search_bar = SearchBar(page)

    search_bar.placeholder = 'Find your course revision materials.'
    search_bar.style.width = '300px'
    
}
