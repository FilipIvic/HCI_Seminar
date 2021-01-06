import React, {useState} from "react"
import { Link, graphql } from "gatsby"

const BlogIndex = ({data, location}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  let posts = data.allMarkdownRemark.nodes
  const [input, setInput] = useState("")
  // let posts = [
  //   {title: "Filip Ivić", slug:"/new-beginnings" },
  //   {title: "Ana Anić", slug:"/new-beginnings" },
  //   {title: "Filip Anić", slug:"/new-beginnings" },
  //   {title: "Ana Ivić", slug:"/new-beginnings" },
  //   {title: "Petra Junić", slug:"/new-beginnings" },
  //   {title: "Ana Anić", slug:"/new-beginnings" },
  // ]

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
    console.log(e.target.value)
  }

  if(1){
    console.log(input.length)
    posts = posts.filter((i) => {
      // return i.title.match(input)
      return i.frontmatter.title.match(input)
    })
  }
  
  return (
    <div>
      <h1 style={{ textAlign: `center` }}>{siteTitle}</h1>
      <input
        type="text"
        placeholder="Type to filter posts..."
        onChange={handleChange}
        value={input}/>
        
        {posts.map((post, index) => {
          const title = post.frontmatter.title
          return(
            <div key = {index}>
              <ul>
                <li>
                <Link to={post.fields.slug}>{title}</Link>
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};
export default BlogIndex

export const data = graphql`
  query data{
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
`
