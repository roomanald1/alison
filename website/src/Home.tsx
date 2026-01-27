import { About } from "./About";
import { BlogsList } from "./BlogsList";

export function Home() {
    return (<>
        <About />
        <BlogsList number_of_items={3} is_dark={true}  />
    </>)
}