<template>
    <div class="service__list">
        <div class="service__list-item">
            <span>Korporatyvinė<br />komunikacija</span>
        </div>
        <div class="service__list-item">
            <span>Reputacijos kūrimas<br />ir valdymas</span>
        </div>
        <div class="service__list-item">
            <span>Rinkodaros<br />komunikacija</span>
        </div>
        <div class="service__list-item">
            <span>Krizių<br />komunikacija</span>
        </div>
        <div class="service__list-item">
            <span>Socialiniai<br />tinklai</span>
        </div>
        <div class="service__list-item">
            <span>Vadovų<br />komunikacija</span>
        </div>
        <div class="service__list-item">
            <span>Darbdavio<br />komunikacija</span>
        </div>
        <div class="service__list-item">
            <span>Ryšiai su<br />žiniasklaida</span>
        </div>
        <div class="service__list-item">
            <span>Renginiai ir<br />konferencijos</span>
        </div>
        <div class="service__list-item">
            <span>Komunikacijos ir<br />pozicionavimo strategijos</span>
        </div>
        <div class="service__list-item">
            <span>Projektų<br />valdymas</span>
        </div>
        <div class="service__list-item">
            <span>Skaitmeninė<br />reklama</span>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {
            // services,
        };
    },
};
</script>

<style scoped lang="scss">
@import "../assets/style.scss";

$gap-3: 28px;
$gap-2: 20px;
$gap-1: 12px;

.service__list {
    position: inherit;
    margin-bottom: 48px;
    gap: $gap-3;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    &-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc((100% - 2 * $gap-3) / 3);
        height: 160px;
        transition: all ease 300ms;

        &:hover {
            padding: 16px;

            span {
                color: $gray;
                border-color: $l-purple;
            }
        }

        &::before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(70deg, $l-purple 0%, $purple 100%);
            opacity: 1;
            border-radius: 4px;
            transition: all ease 300ms;
        }

        &:hover::before {
            opacity: 0;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            padding: 24px 12px;
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
            text-align: center;
            text-transform: uppercase;
            color: #fff;
            border: 1px solid transparent;
            border-radius: 4px;
            transition: all ease 300ms;
        }
    }

    @media (max-width: 1366px) {
        gap: $gap-2;

        &-item {
            width: calc((100% - 2 * $gap-2) / 3);
            height: 160px;
            font-size: 16px;
            line-height: 24px;
        }
    }

    @media (max-width: 1019px) {
        justify-content: center;

        &-item {
            width: calc((100% - $gap-2) / 2);
        }
    }

    @media (max-width: 600px) {
        gap: $gap-1;

        &-item {
            width: 100%;
            height: 120px;
            font-size: 12px;
            line-height: 20px;
        }
    }
}
</style>
