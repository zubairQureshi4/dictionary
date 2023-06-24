/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Table } from "react-bootstrap";
const WordDetails = ({ props, Error }) => {
  return (
    <div>
      {Error ? (
        <div className="text-center mt-5">
          <h5>Message: <br></br><span style={{color: 'red'}}>{Error?.message}</span></h5>
          <h5>How to Resolve: <br/><span style={{color: 'red'}}>{Error?.resolution}</span></h5>
          <h5>Title: <br/><span style={{color: 'red'}}>{Error?.title}</span></h5>
        </div>
      ) : (
        <div>
          <div className="row">
            {props?.phonetics?.map((item) => (
              <div key={Math.random()}>
                <h3 className="text-center mt-3">Phonetics</h3>
                <div className="tabe_design">
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>Text</td>
                      <td>Audio</td>
                    </tr>
                    <tr>
                      <td>{item?.text}</td>
                      <td>
                        <audio src={item?.audio} controls></audio>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                </div>
              </div>
            ))}
          </div>
          {props?.map((item0) => (
          <div className="row">
            {item0?.meanings?.map((item) => (
              <div key={Math.random()} className="">
                <h3 className="text-center mt-3">Meaning</h3>
                <h3 className="text-left mt-1 marginpartOfSpeech">{item?.partOfSpeech}</h3>
                <div className="tabe_design">
                <Table striped bordered hover>
                  {item?.definitions?.map((secondItem)=>(
                    <>
                  <tbody>
                    <tr>
                      <td>Definitions</td>
                      <td>{secondItem?.definition}</td>
                    </tr>
                    {secondItem?.synonyms?.map((thirdItem)=>(
                    <tr>
                      <td>Synonyms</td>
                      <td>{thirdItem?.synonyms}</td>
                    </tr>
                    ))}
                    {secondItem?.antonyms?.map((thirdItem)=>(
                    <tr>
                      <td>Antonyms</td>
                      <td>{thirdItem?.synonyms}</td>
                    </tr>
                    ))}
                    {secondItem?.example ?
                    <tr>
                      <td>Example</td>
                      <td>{secondItem?.example}</td>
                    </tr>
                    : null}
                    <tr><hr></hr></tr>
                  </tbody>
                    </>
                  
            ))}
                </Table>
                </div>
              </div>
            ))}
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WordDetails;
