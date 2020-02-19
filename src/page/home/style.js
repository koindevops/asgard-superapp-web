import styled from "styled-components";
import Background from "../../assets/image/home-cover-background.png"

export const Section = styled.div`

    .kw-home-background {
        background-image: url(${Background});
        height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:  50% 50%;

        &__image img {
            max-width: 220px;
            max-heihgt: 42px;
        }
    }

`