import {
    Accordion,
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Flex,
    Grid,
    SimpleGrid,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels
} from '@chakra-ui/react';
import { SlideFade } from '@chakra-ui/transition';
import { useEffect, useState } from 'react';
import { cardBodyStyle, cardStyle } from '../styles/shop';

import ViewCard from '../components/ViewCard';
import SkeletonLoading from '../components/SkeletonLoading';
// import Select from '../components/Select';
import WikiCountries from '../data/WikiCountries';
import WikiNums from '../data/WikiNums';
import { Select, CreatableSelect, AsyncSelect, GroupBase } from 'chakra-react-select';
//   import { groupedOptions, colorOptions, groupedCountries } from "./data/data";

function ProfileView() {
    const [ isLoading, setLoading ] = useState(true);
    // Get information about this day in history from English Wikipedia

    // country
    // set value for default selection
    const [ selectedValueCountry, setSelectedValueCountry ] = useState();
    const [ selectedLabelCountry, setSelectedLabelCountry ] = useState();
    const [ date, setDate ] = useState(new Date());

    // handle onChange event of the dropdown
    const handleChangeCountry = (e) => {
        setSelectedValueCountry(e.value);
        setSelectedLabelCountry(e.value);
    };

    // set value for default selection
    const [ selectedValueNum, setSelectedValueNum ] = useState();

    // handle onChange event of the dropdown
    const handleChangeNum = (e) => {
        setSelectedValueNum(e.value);
    };

    let today = new Date();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');
    let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;
    let countrycode = selectedLabelCountry;

    setTimeout(() => {
        setLoading(false);
    }, 1500);

    const [ wikiData, setWikiData ] = useState(null);

    const findMostViewed = (countrycode) => {
        fetch(
            `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${countrycode
                ? countrycode
                : 'en'}.wikipedia/all-access/2015/10/10`
        )
            // fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10`)
            .then((res) => res.json())
            .then((data) => (data.items ? setWikiData(data.items) : setWikiData(data)));
    };

    // console.log('wikiData: ', wikiData);
    const handleSubmit = () => {
        findMostViewed(countrycode);
    };
    useEffect(() => {
        findMostViewed('');
    }, []);
    function DataTabs({ dataTabs }) {
        // const tabsArr = [];
        return (
            <Center pt='6'>
                <Tabs>
                    <TabList>
                        {dataTabs.map((data, index) => (
                            // <>
                            /* // tabsArr.push(data.articles.length%10); */
                            // <Tab key={index}>{data.articles.length%10-4}</Tab>
                            // <Tab key={index}>{data.articles.length%10-3}</Tab>
                            // <Tab key={index}>{data.articles.length%10-2}</Tab>
                            // <Tab key={index}>{data.articles.length%10-1}</Tab>
                            // <Tab key={index}>{data.articles.length % 10}</Tab>
                            // <Tab key={index}>{for(var i=data.articles.length%10; i >0 ; i--) i}</Tab>
                            <Tab key={index}>{data.articles.length > 0 ? data.articles.length % 10 : ''}</Tab>
                            // </>
                        ))}
                    </TabList>
                </Tabs>
            </Center>
        );
    }
    function DataPanels({ data }) {
        return (
            <Tabs>
                <TabPanels>
                    {data.map((tab, index) => (
                        <TabPanel p={4} key={index}>
                            {tab.content}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        );
    }

    if (isLoading) {
        return (
            <Box background='#F5F7F7' mx='auto' p='10'>
                <SkeletonLoading />
            </Box>
        );
    }

    return (
        <Box
            background='#F5F7F7'
            py={[ 0, 0, 100 ]}
            sx={{
                '@media (min-width:1100px)': {
                    padding: '0px 200px 0px 200px'
                }
            }}
        >
            <Box pb='300px'>
                <SlideFade in={!isLoading} offsetY='-20px'>
                    <Center fontSize='4xl' py='5'>
                        Top Wikipedia articles
                    </Center>

                    <Box background='white' style={cardStyle}>
                        <Box style={cardBodyStyle}>
                            <SimpleGrid columns={[ 1, 1, 4 ]} spacing='2px'>
                                <Box>
                                    <FormControl p={4}>
                                        <FormLabel fontSize='xs'>DATE</FormLabel>

                                        <Select
                                            tagVariant='outline'
                                            label='Date'
                                            variant='outline'
                                            options={WikiNums}
                                            value={WikiNums}
                                        />
                                    </FormControl>
                                </Box>
                                <Box height='100px'>
                                    <FormControl p={4}>
                                        <FormLabel fontSize='xs'>NUM RESULTS</FormLabel>
                                        <Select
                                            defaultValue={'Num Results'}
                                            tagVariant='outline'
                                            label='Num Results'
                                            variant='outline'
                                            options={WikiNums}
                                            value={WikiNums.filter((obj) => obj.value == String(selectedValueNum))}
                                            onChange={handleChangeNum} // assign onChange function
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    borderColor: 'grey',
                                                    backgroundColor: '#999999',
                                                    color: '#333333'
                                                })
                                            }}
                                        />
                                    </FormControl>
                                </Box>
                                <Box height='100px'>
                                    <FormControl p={4}>
                                        <FormLabel fontSize='xs'>COUNTRY</FormLabel>
                                        <FormLabel />
                                        <Select
                                            defaultValue={'Country'}
                                            tagVariant='outline'
                                            label={WikiCountries.filter(
                                                (obj) => obj.label == String(selectedLabelCountry)
                                            )}
                                            variant='outline'
                                            options={WikiCountries}
                                            value={WikiCountries.filter(
                                                (obj) => obj.value == String(selectedValueCountry)
                                            )}
                                            onChange={handleChangeCountry} // assign onChange function
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    borderColor: 'grey',
                                                    backgroundColor: '#999999',
                                                    color: '#333333'
                                                })
                                            }}
                                        />
                                    </FormControl>
                                </Box>
                                <Box height='100px' position='relative'>
                                    <Button
                                        onClick={handleSubmit}
                                        fontSize='xs'
                                        style={styles.buttonStyle}
                                        colorScheme='green'
                                        backgroundColor='#025B4B'
                                        size='lg'
                                    >
                                        Search
                                    </Button>
                                </Box>
                            </SimpleGrid>
                        </Box>
                    </Box>
                    <Box pt='8'>
                        <Box background='white' style={cardStyle}>
                            <Accordion allowMultiple>
                                <Box style={cardBodyStyle}>
                                    {wikiData && wikiData.length > 0 ? (
                                        wikiData.map((wikiDataInfo, x) => (
                                            <ViewCard key={x} wikiDataInfo={wikiDataInfo.articles} />
                                        ))
                                    ) : (
                                        'Nuthin here'
                                    )}
                                </Box>
                            </Accordion>
                        </Box>
                        <Box>
                            {wikiData && wikiData.length > 0 ? <DataTabs dataTabs={wikiData} /> : <DataTabs dataTabs />}
                        </Box>
                    </Box>
                </SlideFade>
            </Box>
        </Box>
    );
}

const styles = {
    buttonStyle: {
        width: '100%',
        alignItems: 'bottom',
        bottom: '14px',
        position: 'absolute',
        borderRadius: '200px'
    }
};

export default ProfileView;
