/* __placeholder__ */
import { computed } from 'vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonText } from '@ionic/vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const { checkoutItems, addToCheckout, removeFromCheckout } = useStore();
const total = computed(() => {
    return checkoutItems.value.reduce((acc, item) => acc + (item.price * item.quantity), 0);
});
const navigateToOrderSuccess = () => {
    router.push('/order-success');
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
const __VLS_modelEmitsType = {};
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    const __VLS_0 = {}
        .IonPage;
    ({}.IonPage);
    ({}.IonPage);
    __VLS_components.IonPage;
    __VLS_components.ionPage;
    __VLS_components.IonPage;
    __VLS_components.ionPage;
    // @ts-ignore
    [IonPage, IonPage,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    // @ts-ignore
    const __VLS_6 = {}
        .IonHeader;
    ({}.IonHeader);
    ({}.IonHeader);
    __VLS_components.IonHeader;
    __VLS_components.ionHeader;
    __VLS_components.IonHeader;
    __VLS_components.ionHeader;
    // @ts-ignore
    [IonHeader, IonHeader,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    // @ts-ignore
    const __VLS_12 = {}
        .IonToolbar;
    ({}.IonToolbar);
    ({}.IonToolbar);
    __VLS_components.IonToolbar;
    __VLS_components.ionToolbar;
    __VLS_components.IonToolbar;
    __VLS_components.ionToolbar;
    // @ts-ignore
    [IonToolbar, IonToolbar,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({}));
    // @ts-ignore
    const __VLS_18 = {}
        .IonTitle;
    ({}.IonTitle);
    ({}.IonTitle);
    __VLS_components.IonTitle;
    __VLS_components.ionTitle;
    __VLS_components.IonTitle;
    __VLS_components.ionTitle;
    // @ts-ignore
    [IonTitle, IonTitle,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({}));
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    const __VLS_24 = {}
        .IonContent;
    ({}.IonContent);
    ({}.IonContent);
    __VLS_components.IonContent;
    __VLS_components.ionContent;
    __VLS_components.IonContent;
    __VLS_components.ionContent;
    // @ts-ignore
    [IonContent, IonContent,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({}));
    if (__VLS_ctx.checkoutItems.length > 0) {
        // @ts-ignore
        const __VLS_30 = {}
            .IonList;
        ({}.IonList);
        ({}.IonList);
        __VLS_components.IonList;
        __VLS_components.ionList;
        __VLS_components.IonList;
        __VLS_components.ionList;
        // @ts-ignore
        [IonList, IonList,];
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
        const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({}));
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.checkoutItems))) {
            // @ts-ignore
            const __VLS_36 = {}
                .IonItem;
            ({}.IonItem);
            ({}.IonItem);
            __VLS_components.IonItem;
            __VLS_components.ionItem;
            __VLS_components.IonItem;
            __VLS_components.ionItem;
            // @ts-ignore
            [IonItem, IonItem,];
            // @ts-ignore
            const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ key: ((item.id)), }));
            const __VLS_38 = __VLS_37({ key: ((item.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
            ({}({ key: ((item.id)), }));
            // @ts-ignore
            const __VLS_42 = {}
                .IonLabel;
            ({}.IonLabel);
            ({}.IonLabel);
            __VLS_components.IonLabel;
            __VLS_components.ionLabel;
            __VLS_components.IonLabel;
            __VLS_components.ionLabel;
            // @ts-ignore
            [IonLabel, IonLabel,];
            // @ts-ignore
            const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
            const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
            ({}({}));
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
            (item.name);
            // @ts-ignore
            [checkoutItems, checkoutItems,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (item.price.toFixed(2));
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (item.quantity);
            (__VLS_47.slots).default;
            const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
            // @ts-ignore
            const __VLS_48 = {}
                .IonButton;
            ({}.IonButton);
            ({}.IonButton);
            __VLS_components.IonButton;
            __VLS_components.ionButton;
            __VLS_components.IonButton;
            __VLS_components.ionButton;
            // @ts-ignore
            [IonButton, IonButton,];
            // @ts-ignore
            const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onClick': {} }, }));
            const __VLS_50 = __VLS_49({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
            ({}({ ...{ 'onClick': {} }, }));
            let __VLS_54;
            const __VLS_55 = {
                onClick: (...[$event]) => {
                    if (!((__VLS_ctx.checkoutItems.length > 0)))
                        return;
                    __VLS_ctx.addToCheckout(item);
                    // @ts-ignore
                    [addToCheckout,];
                }
            };
            (__VLS_53.slots).default;
            const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
            let __VLS_51;
            let __VLS_52;
            // @ts-ignore
            const __VLS_56 = {}
                .IonButton;
            ({}.IonButton);
            ({}.IonButton);
            __VLS_components.IonButton;
            __VLS_components.ionButton;
            __VLS_components.IonButton;
            __VLS_components.ionButton;
            // @ts-ignore
            [IonButton, IonButton,];
            // @ts-ignore
            const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{ 'onClick': {} }, }));
            const __VLS_58 = __VLS_57({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
            ({}({ ...{ 'onClick': {} }, }));
            let __VLS_62;
            const __VLS_63 = {
                onClick: (...[$event]) => {
                    if (!((__VLS_ctx.checkoutItems.length > 0)))
                        return;
                    __VLS_ctx.removeFromCheckout(item);
                    // @ts-ignore
                    [removeFromCheckout,];
                }
            };
            (__VLS_61.slots).default;
            const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
            let __VLS_59;
            let __VLS_60;
            (__VLS_41.slots).default;
            const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        }
        (__VLS_35.slots).default;
        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        // @ts-ignore
        const __VLS_64 = {}
            .IonItem;
        ({}.IonItem);
        ({}.IonItem);
        __VLS_components.IonItem;
        __VLS_components.ionItem;
        __VLS_components.IonItem;
        __VLS_components.ionItem;
        // @ts-ignore
        [IonItem, IonItem,];
        // @ts-ignore
        const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({}));
        const __VLS_66 = __VLS_65({}, ...__VLS_functionalComponentArgsRest(__VLS_65));
        ({}({}));
        // @ts-ignore
        const __VLS_70 = {}
            .IonLabel;
        ({}.IonLabel);
        ({}.IonLabel);
        __VLS_components.IonLabel;
        __VLS_components.ionLabel;
        __VLS_components.IonLabel;
        __VLS_components.ionLabel;
        // @ts-ignore
        [IonLabel, IonLabel,];
        // @ts-ignore
        const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({}));
        const __VLS_72 = __VLS_71({}, ...__VLS_functionalComponentArgsRest(__VLS_71));
        ({}({}));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        (__VLS_ctx.total.toFixed(2));
        // @ts-ignore
        [total,];
        (__VLS_75.slots).default;
        const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
        (__VLS_69.slots).default;
        const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
        // @ts-ignore
        const __VLS_76 = {}
            .IonButton;
        ({}.IonButton);
        ({}.IonButton);
        __VLS_components.IonButton;
        __VLS_components.ionButton;
        __VLS_components.IonButton;
        __VLS_components.ionButton;
        // @ts-ignore
        [IonButton, IonButton,];
        // @ts-ignore
        const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ ...{ 'onClick': {} }, expand: ("full"), }));
        const __VLS_78 = __VLS_77({ ...{ 'onClick': {} }, expand: ("full"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
        ({}({ ...{ 'onClick': {} }, expand: ("full"), }));
        let __VLS_82;
        const __VLS_83 = {
            onClick: (__VLS_ctx.navigateToOrderSuccess)
        };
        // @ts-ignore
        [navigateToOrderSuccess,];
        (__VLS_81.slots).default;
        const __VLS_81 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78);
        let __VLS_79;
        let __VLS_80;
    }
    else {
        // @ts-ignore
        const __VLS_84 = {}
            .IonText;
        ({}.IonText);
        ({}.IonText);
        __VLS_components.IonText;
        __VLS_components.ionText;
        __VLS_components.IonText;
        __VLS_components.ionText;
        // @ts-ignore
        [IonText, IonText,];
        // @ts-ignore
        const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ color: ("danger"), }));
        const __VLS_86 = __VLS_85({ color: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
        ({}({ color: ("danger"), }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        (__VLS_89.slots).default;
        const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
    }
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                IonPage: IonPage,
                IonHeader: IonHeader,
                IonToolbar: IonToolbar,
                IonTitle: IonTitle,
                IonContent: IonContent,
                IonList: IonList,
                IonItem: IonItem,
                IonLabel: IonLabel,
                IonButton: IonButton,
                IonText: IonText,
                checkoutItems: checkoutItems,
                addToCheckout: addToCheckout,
                removeFromCheckout: removeFromCheckout,
                total: total,
                navigateToOrderSuccess: navigateToOrderSuccess,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
