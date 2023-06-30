import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Badge,
    Box,
    Center,
    Flex,
    Image,
    Spacer,
    Stack,
    useDisclosure,
    Text
} from '@chakra-ui/react';
import { cardBodyStyle, cardImage, cardStyle, labelPricePeach } from '../styles/shop';
import { useEffect, useState } from 'react';

const WikiArticleViewInfo = ({ wikiViewInfo }) => {
    // console.log('wikiViewInfo: ', wikiViewInfo);
    const [ wikiDescriptionTitle, setWikiDescriptionTitle ] = useState(null);
    const [ wikiDescriptionSource, setWikiDescriptionSource ] = useState(null);
    const [ wikiDescriptionData, setWikiDescriptionData ] = useState(null);
    // const [ wikiDescriptionData, setWikiDescriptionData ] = useState(null);

    useEffect(() => {
        fetch(
            `https://api.wikimedia.org/core/v1/wikipedia/en/page/${wikiViewInfo.article}`
            // `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${countrycode
            //     ? countrycode
            //     : 'en'}.wikipedia/all-access/2015/10/10`
        )
            // fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10`)
            .then((res) => res.json())
            .then(
                (data) =>
                    // console.log('d: ', data)
                    data ? setWikiDescriptionData(data) : 's'
                // (data.title ? setWikiDescriptionTitle(data.title) : 's');
                // (data.source ? setWikiDescriptionSource(data.source) : 's');
            );
    }, []);

    return (
        <Box>
            <AccordionItem>
				{wikiViewInfo ? (
					<>	
						<Box mb='4' style={cardStyle}>
							<AccordionButton>
									<Box style={cardBodyStyle}>
										<Stack>
											<Flex>
												<Center>
													<Text fontSize='sm' color='gray'>
														{wikiViewInfo.rank}
													</Text>
												</Center>
												<Center ml='6' size='150px'>
													<Text style={{ fontWeight: 'bold' }} fontSize='md'>
														{wikiViewInfo.article}
														{/* {wikiDescriptionData && wikiDescriptionData.title ? (
															wikiDescriptionData.title
														) : (
															wikiViewInfo.article
														)} */}
													</Text>
												</Center>
												<Spacer />
												<Center>
													<Text position="absolute" right="20px" fontSize='sm' color='gray'>
														{wikiViewInfo.views} views
													</Text>
												</Center>
											</Flex>
										</Stack>
									</Box>
								</AccordionButton>
							</Box>
							<AccordionPanel>
								<Box mb="5" sx={{
									// white-space: pre;
									// text-overflow: ellipsis;
									maxHeight: '66px',
									overflow: 'hidden'}}
								>
									<Text fontSize="sm" color="grey">
									{wikiDescriptionData && wikiDescriptionData.source ? (
									wikiDescriptionData.source): (
									<Center>'No description'</Center>)}
									</Text>
									
								</Box>
								<hr/>
								<Box fontSize="sm" pt="6">
									<Text fontSize="xs" pb="4" style={{ fontWeight: 'bold' }} >
										TOP VIEWS THIS MONTH
									</Text>
									<Box pt="2">
										June 5, 2023 <Text style={styles.viewsFloatRightStyle} as="span">568,000 views</Text>
									</Box>
									<Box pt="2">
										October 18, 2023 <Text style={styles.viewsFloatRightStyle} as="span">320,000 views</Text>
									</Box>
									<Box pt="2">
										December 16, 2023 <Text style={styles.viewsFloatRightStyle} as="span">160,000 views</Text>
									</Box>
								</Box>
							</AccordionPanel>
						</>
                    ) : (
                        <Text fontSize='sm'>No Results...</Text>
                    )}
                
            </AccordionItem>
        </Box>
    );
};

const styles = {
    viewsFloatRightStyle: {
		float:'right',
		color:"#E58A00"
    }
};

export default WikiArticleViewInfo;
