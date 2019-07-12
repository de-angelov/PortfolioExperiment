import Vue from "vue";

declare module "vue" {
  interface Vue {
    $anime(input: any): any;
  }
}
