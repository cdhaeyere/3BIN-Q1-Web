import { ProviderWrapper as OpinionProviderWrapper } from "contexts/OpinionContext"
import App from "components/App/App";

const AppLoader= () => {
    return (
        <OpinionProviderWrapper>
            <App />
        </OpinionProviderWrapper>
    );
}

export default AppLoader;