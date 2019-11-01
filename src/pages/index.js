import React from "react"
import { graphql } from 'gatsby';

export const query = graphql`
    query IndexQuery {
        allImageSharp {
            nodes {
                resize(width: 20, base64: true) {
                    src
                }
            }
        }
    }
`;

export default ({ data }) => <>
    <div>Hello world!</div>
    <img src={data.allImageSharp.nodes[0].resize.src} alt="a screenshot" title="a screenshot" />
</>;
