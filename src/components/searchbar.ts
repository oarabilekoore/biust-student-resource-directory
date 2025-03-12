import { Parent, TextInput, Div, Button, Span } from "innerscope";
import "./searchbar.css"
export function SearchBar(parent: Parent) {
    const search_bar = TextInput(parent);
    search_bar.classList.add('search-bar')
    return search_bar;
}
