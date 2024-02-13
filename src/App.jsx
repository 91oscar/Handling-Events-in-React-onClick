import TreeCard from "./components/TreeCard"
import "./CSS-of-the-components/treeCard.css";
import "./CSS-of-the-components/btn.css";
import "./style.css";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="style" id="main">
      <section className="style__1">
        <h1>Cool trees!</h1>
        <TreeCard
        title="puppy"
        imgUrl="https://images.unsplash.com/25/puppy-love.jpg?q=80&w=969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imgAlt="Puppy"
        p="This pic is a doggy"
        />
        <Button/>  
      </section> 
    </div>
  )
}

