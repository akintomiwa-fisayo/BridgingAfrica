<%@ Page Title="" Language="C#" MasterPageFile="~/user.Master" AutoEventWireup="true" CodeBehind="Crowdfunding.aspx.cs" Inherits="bridgingafrika.Crowdfunding" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    
        <!-- contents -->
        <div class="main_content">

            <div class="main_content_inner">


             


                

                <div class="section-header">
                    <div class="section-header-left">
                        <h3>Crowd Funding Categories </h3>
                    </div>
                    <div class="section-header-right">
                        <a href="#" class="see-all"> See all</a>
                    </div>
                </div>

                <div class="uk-position-relative" uk-slider="finite: true">

                    <div class="uk-slider-container pb-3">

                        <ul
                            class="uk-slider-items uk-child-width-1-6@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">

                            <li>

                                <a href="#">
                                    <div class="group-catagroy-card" data-src="assets/images/product/innovation-1.jpg" uk-img>
                                        <div class="group-catagroy-card-content">
                                            <h4> Technology </h4>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="group-catagroy-card" data-src="assets/images/product/innovation-2.jpg" uk-img>
                                        <div class="group-catagroy-card-content">
                                            <h4> Education </h4>
                                        </div>
                                    </div>
                                </a>

                            </li>
                            <li>

                                <a href="#">
                                    <div class="group-catagroy-card" data-src="assets/images/product/innovation-3.jpg" uk-img>
                                        <div class="group-catagroy-card-content">
                                            <h4> Health </h4>
                                        </div>
                                    </div>
                                </a>

                            </li>
                            <li>

                                <a href="#">
                                    <div class="group-catagroy-card" data-src="assets/images/product/innovation-4.jpg" uk-img>
                                        <div class="group-catagroy-card-content">
                                            <h4> Agriculture </h4>
                                        </div>
                                    </div>
                                </a>

                            </li>
                          
                            
                        </ul>

                       

                    </div>
                </div>

              

                <hr class="my-3 my-sm-2">

                <div uk-slider="finite: true">

                    <div class="grid-slider-header">
                        <div>
                            <h3>Crowd Funding </h3>
                        </div>
                        <div class="grid-slider-header-link">

                            <a href="#" class="button transparent uk-visible@m"> View all </a>
                            <a href="#" class="slide-nav-prev" uk-slider-item="previous"></a>
                            <a href="#" class="slide-nav-next" uk-slider-item="next"></a>
                        </div>
                    </div>

                    <ul class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-3@s uk-grid-small uk-grid">

                        <li>
                            <a href="m-single-product.html">
                                <div class="market-list">
                                    <div class="item-media">
                                        <img src="assets/images/product/images.jpg" alt="">
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-price">Goals 42$ </div>
                                        <div class="item-title"> Face Shield </div>
                                        <div class="item-statistic">
                                            <span> <i class="uil-thumbs-up"></i> <span class="count">40</span> likes
                                            </span>
                                            <span> <i class="uil-eye"></i> <span class="count">160</span> views </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="m-single-product.html">
                                <div class="market-list">
                                    <div class="item-media">
                                        <img src="assets/images/product/photo.jpg" alt="">
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-price">Goals  35$ </div>
                                        <div class="item-title"> Protective Gear </div>
                                        <div class="item-statistic">
                                            <span> <i class="uil-thumbs-up"></i> <span class="count">2</span> likes
                                            </span>
                                            <span> <i class="uil-eye"></i> <span class="count">286</span> views </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="m-single-product.html">
                                <div class="market-list">
                                    <div class="item-media">
                                        <img src="assets/images/product/86528.jpg" alt="">
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-price">Goals 29$ </div>
                                        <div class="item-title"> PPE Kits </div>
                                        <div class="item-statistic">
                                            <span> <i class="uil-thumbs-up"></i> <span class="count">2</span> likes
                                            </span>
                                            <span> <i class="uil-eye"></i> <span class="count">106</span> views </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="m-single-product.html">
                                <div class="market-list">
                                    <div class="item-media">
                                        <img src="assets/images/product/9.jpg" alt="">
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-price">Goals 20$ </div>
                                        <div class="item-title"> Cocooil baby oil on desk </div>
                                        <div class="item-statistic">
                                            <span> <i class="uil-thumbs-up"></i> <span class="count">2</span> likes
                                            </span>
                                            <span> <i class="uil-eye"></i> <span class="count">286</span> views </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>

                    </ul>

                </div>


            </div>


        </div>
</asp:Content>
