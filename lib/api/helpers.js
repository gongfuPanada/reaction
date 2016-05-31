import url from "url";
import { Meteor } from "meteor/meteor";
import { FlowRouter } from "meteor/kadira:flow-router-ssr";
import { Shops } from "/lib/collections";

/**
 * getShopId
 * @return {String} returns current shopId
 */
export function getShopId() {
  const domain = url.parse(Meteor.absoluteUrl()).hostname;

  const shop = Shops.find({ domains: { $in: [domain] }}, {
    limit: 1
  }).fetch()[0];

  return !!shop ? shop._id : null;
}


/**
 * getShopName
 * @return {String} returns current shop name
 */
export function getShopName() {
  const domain = url.parse(Meteor.absoluteUrl()).hostname;

  const shop = Shops.find({ domains: { $in: [domain] }}, {
    limit: 1
  }).fetch()[0];

  return !!shop ? shop.name : null;
}


/**
 * getShopId
 * @return {String} returns current tag
 */
export function getCurrentTag() {
  if (FlowRouter.getRouteName() === "tag") {
    return FlowRouter.current().params.slug;
  }
  return null;
}