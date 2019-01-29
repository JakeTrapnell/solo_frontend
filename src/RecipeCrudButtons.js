import React, { Component } from 'react';
import axios from 'axios';

class RecipeCrudButtons extends Component{
    

    constructor(){
        super();
        this.state=
            { 
            recipeData: {}
            };

        axios.get("http://localhost:8080/Solo-API/rest/recipe/json")
        .then(response => {
            this.setState({recipeData: response.data})
        })
        }

    updateCuisine = (event) =>{
        this.setState({cuisine: event.target.value});
        console.log(this.state.cuisine);
    }

    updateTimeToCook = (event)=>{
        this.setState({timeToCook: event.target.value});
        console.log(this.state.timeToCook);
    }

    updateIsVegitarian = (event)=>{
        this.setState({isVegitarian: event.target.value});
        console.log(this.state.isVegitarian);
    }

    updateCourse = (event)=>{
        this.setState({course: event.target.value});
        console.log(this.state.course);
    }

    updateIngredients = (event)=>{
        this.setState({ingredients: event.target.value});
        console.log(this.state.ingredients);
    }

    updateMethod = (event)=>{
        this.setState({method: event.target.value});
        console.log(this.state.method);
    }
        //handles input change not the database
    

    updateId = (event) =>{
        this.setState({id: event.target.value});
        console.log(this.state.id);
        //handles id input change not the database
    }
    
    createRecipe =() =>{
        axios({
            method: 'POST',
            url: 'http://localhost:8080/Solo-API/rest/user/json',
            data: {
                cuisine: this.state.cuisine,
                timeToCook: this.state.timeToCook,
                isVegitarian: this.state.isVegitarian,
                course: this.state.course,
                ingredients: this.state.ingredients,
                method: this.state.method
            }
            
        });
        console.log(this.state.cuisine + " : added to database");
    }

    readRecipe =() =>{
        axios({
            method: 'GET',
            url: 'http://localhost:8080/Solo-API/rest/user/json' + this.setState.id,
            responseType: 'json'
          })
          .then(response=>{
              if(response.data !== undefined){
                this.setState({
                    cuisine: response.data.cuisine,
                    timeToCook: response.data.timeToCook,
                    isVegitarian: response.data.isVegitarian,
                    course: response.data.course,
                    ingredients: response.data.ingredients,
                    method: response.data.method
                });

              }
              else{
                  console.log("failed");                 
              }
          });
    }


    deleteRecipe =() =>{
        axios({
            method: 'DELETE',
            url: 'http://localhost:8080/Solo-API/rest/user/json/' + this.state.id,
            responseType: 'json'
        })
    }

    
    render()
    {
        return(
            <div className= "crudButtons">
            <br/>
            <form>
                <br/>
                <input ref="id" id="recipeID" type="number" placeholder="Enter Recipe ID Number:" onChange={this.updateId}/>
                <br/>
                <input ref="cuisine" id="recipeCuisine" type="text" placeholder="Enter Recipe name:" onChange={this.updateCuisine}/>
                <br/>
                <input ref="timeToCook" id="recipeTimeToCook" type="text" placeholder="Enter time to cook:" onChange={this.updateTimeToCook}/>
                <br/>
                <input ref="isVegitarian" id="recipeIsVegitarian" type="text" placeholder="Is This Vegitarian?:" onChange={this.updateIsVegitarian}/>
                <br/>
                <input ref="Course" id="recipeCourse" type="text" placeholder="Enter course:" onChange={this.updateCourse}/>
                <br/>
                <textarea ref="ingredients" id="RecipeIngredients" type="text" placeholder="Enter Ingredients:" rows="20" cols="40" onChange={this.updateIngredients}/>
                <br/>
                <textarea ref="method" id="recipemethod" type="text" placeholder="Enter Method:" rows="20" cols="40" onChange={this.updateMethod}/>
            </form>
            <br/>
            <br/>
            <button className= "navButton" onClick={this.createRecipe}>Create</button>
            <button className= "navButton" onClick={this.readRecipe}>Search</button>
            <button className= "navButton">Update</button>
            <button className= "navButton" onClick={this.deleteRecipe}>Delete</button>

            <br/>            
            <p>Recipe Name: {JSON.stringify(this.state.cuisine)}</p>
            <br/>
            
    

            </div>

        );
    }
}

export default RecipeCrudButtons;