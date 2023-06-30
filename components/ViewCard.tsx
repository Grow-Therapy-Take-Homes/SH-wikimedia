import { Box } from '@chakra-ui/react';
import WikiArticleViewInfo from '../components/WikiArticleViewInfo';

const WikiViewsCard = ({ wikiDataInfo }) => {
    // console.log('wikiDataInfo: ', wikiDataInfo);
    return (
        <Box>
            {wikiDataInfo && wikiDataInfo.length ? (
                wikiDataInfo
                    .slice(0, 10)
                    .map((wikiArticleViewInfo, x) => <WikiArticleViewInfo key={x} wikiViewInfo={wikiArticleViewInfo} />)
            ) : (
                'mooo'
            )}
        </Box>
    );
};
export default WikiViewsCard;
