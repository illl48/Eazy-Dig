import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import actions from '../actions';
import Displayrelease from './displayrelease';

class Releases extends Component {
    
    submitQuery(page) {
        let data = {};
        data.page =  this.props.search.page + page;
        data.recordKeyWord = this.props.query.currentQuery;
        this.props.startLoading();
        this.props.submitNewRecord(data);
    }
    
    render() {
		const p = this.props;
		let rows = [];
		if (p.search.results) {            
            rows = p.search.results.map((result) =>{
                return (
                    <Displayrelease 
                        thumb={result.thumb}
                        title={result.title}
                        format={result.format}
                        catno={result.catno}
                        year={result.year}
                        label={result.label}
                        country={result.country}
                        genre={result.genre[0]}
                        id={result.id}
                        key={result.id}
                    />
                );
            }); 
		}
        
		return (
            <section>
                <header className="releasesHeader">
                    <Glyphicon glyph="circle-arrow-left" onClick={this.props.changePage.bind(this,'search')} className="link"/>
                    <h4>SEARCH RESULTS</h4>
                </header>
                <section className="releasesWrapper">
                    {rows.length===0? 'found nothing' : rows}  
                </section>
                <footer className="releasesFooter">
                    <Button onClick={this.submitQuery.bind(this, -1)} disabled={p.search.page===1}>
                        <Glyphicon glyph="triangle-left" /> 
                    </Button>
                    {p.search.page} / {p.search.pages}
                    <Button onClick={this.submitQuery.bind(this, 1)} disabled={p.search.page===p.search.pages}>
                        <Glyphicon glyph="triangle-right" />
                    </Button>        
                </footer>
            </section>
		);
	}
}

const mapStateToProps = (appState) => {
	return { 
        search: appState.search,
        query: appState.query,
        ui: appState.ui
    };
};

const mapDispatchToProps = (dispatch) => {
	return {
        submitNewRecord(data) { dispatch(actions.submitNewRecord(data)); },
        startLoading(){ dispatch(actions.startLoading()); },
        changePage(page) { dispatch(actions.changePage(page)); },
        previousPage() { dispatch(actions.previousPage()); }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Releases);
