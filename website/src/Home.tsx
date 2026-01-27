import { About } from "./About";
import { BlogsSummary } from "./BlogsSummary";
import { Contact } from "./Contact";

export function Home() {
    return (<>
        <About />
        <BlogsSummary />
        <Contact />
    </>)
}