import { About } from "./About";
import { BlogsList } from "./BlogsList";
import { Contact } from "./Contact";

export function Home() {
    return (<>
        <About />
        <BlogsList number_of_items={3}  />
        <Contact />
    </>)
}