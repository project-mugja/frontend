import { useEffect, useState } from "react";
import { Loader } from "./components";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { delFav, doSearch } from "../api";
import { favCategory } from "../atom";
import { ISearchPage } from "../interface";
import { SearchPageProps } from "../routes/search-page";
import SearchResult from "./SearchResult";

const PagingBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;
` 
const Paging = styled.span`
    margin: 30px 20px 20px 20px;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    text-align: center;
    font-size: 13px;
    background-color: silver;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        width: 8px;
        fill: white;
    }
`
const Title = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    span{
        font-size: 22px;
        font-weight: bold;
        margin-right: 10px;
    }
`


function SearchList({category, search, token}:SearchPageProps){
    const [ cat, setCat] = useRecoilState(favCategory);
    const [thisPage, setThisPage ] = useState(1);
    const [pages, setPages] = useState(0);
    const {isLoading, data, refetch} = useQuery<ISearchPage>(
        ["searchList", thisPage, cat],
        () => doSearch(cat,thisPage,search),
    )
    const handleDelete = async (hostId:number) => {
        try{
            await delFav(hostId,token);
            refetch();
        } catch (error){
            console.log("fail")
        }
    }
    useEffect(()=>{
        setCat(category);
    },[category, setCat])
    return(
        <>
            <Title>
                {isLoading? <Loader/> : <span>{data?.totalElements}</span>}
            </Title>
            {isLoading? 
            <Loader/> 
            : 
            <>
                {data?.content.map(search => 
                    <SearchResult key={search.hostId} search={search} onClick={() => {
                        handleDelete(search.hostId);
                    }}/>
                )}
                <PagingBox>
                    <Paging className="clickable" onClick={pages !== 0?
                        () => {
                            setPages(prev => prev - 5);
                            setThisPage(pages - 4);
                        }
                        :
                        () => {}
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </Paging>
                        {isLoading? <Loader/> : !data? <Loader/> :
                            Array.from({length:data.totalPages>pages+5? 5 : data.totalPages%5},(_,i)=>i ).map(index => 
                                <Paging 
                                    key={index}
                                    className="clickable"
                                    style={{
                                        "backgroundColor": `${index+1+pages === thisPage ? "#1565FF" : "#F5F8FF"}`,
                                        "color": `${index+1+pages === thisPage? "white" : "black"}`,
                                    }}
                                    onClick={()=>{
                                        setThisPage(index+1+pages);
                                    }}
                                >
                                    {index+1+pages}
                                </Paging>
                            )
                        }
                    <Paging
                        className="clickable" 
                        onClick={ data && data.totalPages>pages+5?
                        () => {
                            setPages(prev => prev + 5);
                            setThisPage(pages + 6);
                        }
                        :
                        () => {}
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </Paging>
                </PagingBox>
            </>}
        </>
    )
}

export default SearchList;